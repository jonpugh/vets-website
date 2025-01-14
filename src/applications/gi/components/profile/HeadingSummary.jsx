import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import AdditionalResources from '../content/AdditionalResources';
import { formatNumber } from '../../utils/helpers';

const IconWithInfo = ({ icon, children, present }) => {
  if (!present) return null;
  return (
    <p className="icon-with-info">
      <i className={`fa fa-${icon}`} />
      &nbsp;
      {children}
    </p>
  );
};

class HeadingSummary extends React.Component {
  render() {
    const it = this.props.institution;
    it.type = it.type && it.type.toLowerCase();

    const schoolSize = enrollment => {
      if (!enrollment) return 'Unknown';
      if (enrollment <= 2000) {
        return 'Small';
      } else if (enrollment <= 15000) {
        return 'Medium';
      }
      return 'Large';
    };

    return (
      <div className="heading row">
        <div className="usa-width-two-thirds medium-8 small-12 column">
          <h1 tabIndex={-1}>{it.name}</h1>
          <AlertBox
            content={
              <p>
                Are you enrolled in this school?{' '}
                <a
                  href="https://www.benefits.va.gov/GIBILL/FGIB/Restoration.asp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Find out if you qualify to have your benefits restored.
                </a>
              </p>
            }
            headline="This school is closing soon"
            isVisible={!!it.schoolClosing}
            status="warning"
          />
          <div className="caution-flag">
            <AlertBox
              content={
                <a href="#viewWarnings" onClick={this.props.onViewWarnings}>
                  View cautionary information about this school
                </a>
              }
              headline="This school has cautionary warnings"
              isVisible={!!it.cautionFlag}
              status="warning"
            />
          </div>
          <div className="column">
            <p>
              <strong>{formatNumber(it.studentCount)}</strong> GI Bill students
              (
              <button
                type="button"
                className="va-button-link learn-more-button"
                onClick={this.props.onLearnMore}
              >
                Learn more
              </button>
              )
            </p>
          </div>
          <div>
            <div className="usa-width-one-half medium-6 small-12 column">
              <IconWithInfo icon="map-marker" present={it.city && it.country}>
                {it.city}, {it.state || it.country}
              </IconWithInfo>
              <IconWithInfo icon="globe" present={it.website}>
                <a href={it.website} target="_blank" rel="noopener noreferrer">
                  {it.website}
                </a>
              </IconWithInfo>
              <IconWithInfo
                icon="calendar-o"
                present={it.type !== 'ojt' && it.highestDegree}
              >
                {_.isFinite(it.highestDegree)
                  ? `${it.highestDegree} year`
                  : it.highestDegree}{' '}
                program
              </IconWithInfo>
            </div>

            <div className="usa-width-one-half medium-6 small-12 column">
              <IconWithInfo icon="briefcase" present={it.type === 'ojt'}>
                On-the-job training
              </IconWithInfo>
              <IconWithInfo
                icon="institution"
                present={it.type && it.type !== 'ojt'}
              >
                {_.capitalize(it.type)} school
              </IconWithInfo>
              <IconWithInfo
                icon="map"
                present={it.localeType && it.type && it.type !== 'ojt'}
              >
                {_.capitalize(it.localeType)} locale
              </IconWithInfo>
              <IconWithInfo icon="group" present={it.type && it.type !== 'ojt'}>
                {schoolSize(it.undergradEnrollment)} size
              </IconWithInfo>
            </div>
          </div>
        </div>
        <AdditionalResources />
      </div>
    );
  }
}

HeadingSummary.propTypes = {
  institution: PropTypes.object,
  onLearnMore: PropTypes.func,
  onViewWarnings: PropTypes.func,
};

export default HeadingSummary;
