import * as Sentry from '@sentry/browser';

import environment from '../environment';
import localStorage from '../storage/localStorage';

export function fetchAndUpdateSessionExpiration(...args) {
  // Only replace with custom fetch if not stubbed for unit testing
  if (fetch.displayName !== 'stub') {
    return fetch.apply(this, args).then(response => {
      const apiURL = environment.API_URL;

      if (
        response.url.includes(apiURL) &&
        (response.ok || response.status === 304)
      ) {
        // Get session expiration from header
        const sessionExpiration = response.headers.get('X-Session-Expiration');
        if (sessionExpiration) {
          localStorage.setItem('sessionExpiration', sessionExpiration);
        }
      }
      return response;
    });
  }

  return fetch(...args);
}

function isJson(response) {
  const contentType = response.headers.get('Content-Type');
  return contentType && contentType.includes('application/json');
}

/**
 *
 * @param {string} resource - The URL to fetch. If it starts with a leading "/"
 * it will be appended to the baseUrl. Otherwise it will be used as an absolute
 * URL.
 * @param {Object} [{}] optionalSettings - Custom settings you want to apply to
 * the fetch request. Will be mixed with, and potentially override, the
 * defaultSettings
 * @param {Function} success - Callback to execute after successfully resolving
 * the initial fetch request.
 * @param {Function} error - Callback to execute if the fetch fails to resolve.
 */
export function apiRequest(resource, optionalSettings = {}, success, error) {
  const baseUrl = `${environment.API_URL}/v0`;
  const url = resource[0] === '/' ? [baseUrl, resource].join('') : resource;

  const defaultSettings = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-Key-Inflection': 'camel',
    },
  };

  const newHeaders = Object.assign(
    {},
    defaultSettings.headers,
    optionalSettings ? optionalSettings.headers : undefined,
  );

  const settings = Object.assign({}, defaultSettings, optionalSettings);
  settings.headers = newHeaders;

  return fetchAndUpdateSessionExpiration(url, settings)
    .catch(err => {
      Sentry.withScope(scope => {
        scope.setExtra('error', err);
        Sentry.captureMessage(`vets_client_error: ${err.message}`);
      });

      return Promise.reject(err);
    })
    .then(response => {
      const data = isJson(response)
        ? response.json()
        : Promise.resolve(response);

      if (response.ok || response.status === 304) {
        return data;
      }

      if (environment.isProduction()) {
        const { pathname } = window.location;
        const shouldRedirectToSessionExpired =
          response.status === 401 &&
          !pathname.includes('auth/login/callback') &&
          sessionStorage.getItem('shouldRedirectExpiredSession') === 'true';

        if (shouldRedirectToSessionExpired) {
          window.location = '/session-expired';
        }
      }

      return data.then(Promise.reject.bind(Promise));
    })
    .then(success)
    .catch(error);
}
