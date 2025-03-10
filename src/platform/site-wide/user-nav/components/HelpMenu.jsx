import PropTypes from 'prop-types';
import React from 'react';

import DropDownPanel from '@department-of-veterans-affairs/formation-react/DropDownPanel';
import IconHelp from '@department-of-veterans-affairs/formation-react/IconHelp';

import isVATeamSiteSubdomain from '../../../utilities/environment/va-subdomain';
import facilityLocatorManifest from '../../../../applications/facility-locator/manifest.json';

const FACILITY_LOCATOR_URL = facilityLocatorManifest.rootUrl;

class HelpMenu extends React.Component {
  render() {
    const facilityLocatorUrl = isVATeamSiteSubdomain()
      ? `https://www.va.gov${FACILITY_LOCATOR_URL}`
      : FACILITY_LOCATOR_URL;
    const icon = <IconHelp color="#fff" role="presentation" />;

    const dropDownContents = (
      <div className="va-helpmenu-contents">
        <p>
          <a href={`${facilityLocatorUrl}`}>Find a VA Location</a>
        </p>
        <p>
          <a href="https://iris.custhelp.va.gov/app/ask">Ask a Question</a>
        </p>
        <p>
          <a href="tel:18446982311">Call MyVA311: 844-698-2311</a>
        </p>
        <p>TTY: 711</p>
      </div>
    );

    return (
      <DropDownPanel
        buttonText="Contact us"
        clickHandler={this.props.clickHandler}
        cssClass={this.props.cssClass}
        id="help-menu"
        icon={icon}
        isOpen={this.props.isOpen}
      >
        {dropDownContents}
      </DropDownPanel>
    );
  }
}

HelpMenu.propTypes = {
  cssClass: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HelpMenu;
