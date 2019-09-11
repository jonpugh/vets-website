import React from 'react';
import { connect } from 'react-redux';

import ErrorableCheckbox from '@department-of-veterans-affairs/formation-react/ErrorableCheckbox';
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import environment from 'platform/utilities/environment';
import { selectProfile } from 'platform/user/selectors';

import * as VET360 from '../constants';
import { createTransaction } from '../actions';
import { selectVet360Transaction } from '../selectors';

import {
  isPendingTransaction,
  isFailedTransaction,
} from '../util/transactions';

import { getEnrollmentStatus as getEnrollmentStatusAction } from 'applications/hca/actions';
import { isEnrolledInVAHealthCare } from 'applications/hca/selectors';

class ReceiveTextMessages extends React.Component {
  state = {
    startedTransaction: false,
    completedTransaction: false,
    lastTransaction: null,
  };

  componentDidMount() {
    if (this.props.profile.verified) {
      this.props.getEnrollmentStatus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.transaction) {
      this.setState({ lastTransaction: nextProps.transaction });
      if (!this.props.transaction)
        this.setState({ completedTransaction: true });
    }
  }

  onChange = event => {
    const payload = this.props.profile.vet360.mobilePhone;
    payload.isTextPermitted = event;
    const method = payload.id ? 'PUT' : 'POST';
    this.props.createTransaction(
      this.props.apiRoute,
      method,
      this.props.fieldName,
      payload,
      this.props.analyticsSectionName,
    );

    this.setState({
      startedTransaction: true,
      completedTransaction: false,
      lastTransaction: null,
    });
  };

  isSuccessVisible() {
    let showSuccess = false;
    if (
      this.state.startedTransaction &&
      this.state.completedTransaction &&
      this.state.lastTransaction &&
      !isFailedTransaction(this.state.lastTransaction)
    ) {
      showSuccess = true;
    }
    return showSuccess;
  }

  render() {
    const { hideCheckbox } = this.props;

    if (hideCheckbox) return null;

    return (
      <div className="receive-text-messages">
        <div className="form-checkbox-buttons">
          <ErrorableCheckbox
            checked={!!this.props.profile.vet360.mobilePhone.isTextPermitted}
            label={
              <span>
                Receive text messages (SMS) for VA health care appointment
                reminders.
              </span>
            }
            onValueChange={this.onChange}
          />
          <AlertBox
            isVisible={this.isSuccessVisible()}
            content={<p>Your preference has been saved.</p>}
            status="success"
            backgroundOnly
          />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state, ownProps) {
  const { fieldName } = ownProps;
  const { transaction } = selectVet360Transaction(state, fieldName);
  const hasError = transaction && isFailedTransaction(transaction);
  const isPending = transaction && isPendingTransaction(transaction);
  const profileState = selectProfile(state);
  const isEmpty = !profileState.vet360.mobilePhone;
  const isTextable = !isEmpty && profileState.vet360.mobilePhone.isTextable;
  const hideCheckbox =
    environment.isProduction() ||
    isEmpty ||
    !isTextable ||
    !isEnrolledInVAHealthCare(state) ||
    hasError ||
    isPending;
  return {
    profile: profileState,
    hideCheckbox,
    transaction,
    analyticsSectionName: VET360.ANALYTICS_FIELD_MAP[fieldName],
  };
}

const mapDispatchToProps = {
  getEnrollmentStatus: getEnrollmentStatusAction,
  createTransaction,
};

const ReceiveTextMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiveTextMessages);

export default ReceiveTextMessagesContainer;