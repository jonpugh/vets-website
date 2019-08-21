import React from 'react';
import { connect } from 'react-redux';

import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import ErrorableCheckbox from '@department-of-veterans-affairs/formation-react/ErrorableCheckbox';
import { FIELD_NAMES } from '../constants';
import { selectVet360Field } from '../selectors';

class ReceiveTextMessages extends React.Component {
  state = { showSuccess: false, checkboxValue: this.props.checked };

  onChange = event => {
    this.setState({ checkboxValue: event });
    // start the api call to update isTextPermitted with value of event (true/false)
    // make checkbox disabled until api call comes back
    // when api call comes back as a success then re-enable checkbox and make success message visable
    // TODO: Figure out where/when to make the success alert invisible again after that
  };

  isSuccessAlertVisible = () =>
    // TODO: Put logic here to control success alert box.
    this.state.showSuccess;

  render() {
    if (!this.props.isTextable || !this.props.isEnrolledInHealthcare)
      return <div />;
    return (
      <div className="receive-text-messages">
        <div className="form-checkbox-buttons">
          <ErrorableCheckbox
            name="isTextPermitted"
            checked={this.state.checkboxValue}
            label={
              <span>
                Receive text messages (SMS) for VA health care appointment
                reminders.
              </span>
            }
            onValueChange={this.onChange}
          />
          <AlertBox
            isVisible={this.isSuccessAlertVisible()}
            content={<p>Your preference has been saved.</p>}
            status="success"
            backgroundOnly
          />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const mobilePhone = selectVet360Field(state, FIELD_NAMES.MOBILE_PHONE);

  const isTextable = mobilePhone.isTextable;

  const isTextPermitted = mobilePhone.isTextPermitted;

  const checked = isTextable && isTextPermitted;

  // TODO: get the real flag...
  const isEnrolledInHealthcare = true;

  return {
    mobilePhone,
    isTextable,
    isTextPermitted,
    checked,
    isEnrolledInHealthcare,
  };
}

export default connect(mapStateToProps)(ReceiveTextMessages);
