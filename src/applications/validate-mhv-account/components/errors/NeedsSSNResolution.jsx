import React from 'react';
import MessageTemplate from '../MessageTemplate';

const NeedsSSNResolution = () => {
  const content = {
    heading: 'The information you provided doesn’t match our records.',
    alertContent: (
      <div>
        <p>
          We’re sorry. We can’t match the information you provided with what we
          have in our Veteran records. We take your privacy seriously, and we're
          committed to protecting your information. We can’t give you access to
          our online health tools until we can match your information and verify
          your identity.
        </p>
      </div>
    ),
    alertStatus: 'error',
    body: (
      <>
        <h5>What you can do</h5>
        <p>
          Please call us or submit a question online. We can help to try to
          match your information to our records and verify your identity.
        </p>
        <ul className="usa-accordion">
          <li>
            <button
              className="usa-accordion-button"
              aria-expanded="false"
              aria-controls="a1"
            >
              Call us
            </button>
            <div id="a1" className="usa-accordion-content">
              <p>
                Please call us at <a href="tel:800-827-1000">800-827-1000</a>.
                We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. If
                you have hearing loss, call TTY: 1-800-829-4833.
              </p>
              <p>
                When the system prompts you to give a reason for your call, say,
                “eBenefits.”
              </p>
              <p>
                <strong>We’ll then ask you to tell us:</strong>
              </p>
              <ul>
                <li>
                  Your full name. Please provide the last name you used while in
                  service or that’s listed on your DD214 or other separation
                  documents, even if you’ve since changed your name.
                </li>
                <li>Your Social Security Number</li>
                <li>Your checking or savings account number</li>
                <li>
                  The dollar amount of your most recent VA electronic funds
                  transfer (EFT)
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="usa-accordion-button"
              aria-expanded="false"
              aria-controls="a2"
            >
              Ask us a question online
            </button>
            <div id="a2" className="usa-accordion-content">
              <p>
                Ask us a question online through our online help center, known
                as the Inquiry Routing &amp; Information System (or IRIS).
              </p>
              <p>
                <strong>Fill in the form fields as below:</strong>
              </p>
              <ul>
                <li>
                  <strong>Question:</strong> Type in{' '}
                  <strong>Not in DEERS</strong>.
                </li>
                <li>
                  <strong>Topic:</strong> Select{' '}
                  <strong>Veteran not in DEERS (Add)</strong>.
                </li>
                <li>
                  <strong>Inquiry type:</strong> Select{' '}
                  <strong>Question</strong>
                </li>
              </ul>
              <p>
                Then, complete the rest of the form and click{' '}
                <strong>Submit</strong>
              </p>
              <p>We’ll contact you within 2 to 3 days.</p>
              <a
                href="https://iris.custhelp.va.gov/app/ask"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to the IRIS website question form
              </a>
            </div>
          </li>
        </ul>
      </>
    ),
  };

  return <MessageTemplate content={content} />;
};

export default NeedsSSNResolution;