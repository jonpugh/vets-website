import _ from 'lodash/fp';

import fullSchema1995Stem from 'vets-json-schema/dist/22-1995-STEM-schema.json';

import { transform } from '../helpers';

import * as address from 'platform/forms/definitions/address';
import FormFooter from 'platform/forms/components/FormFooter';
import environment from 'platform/utilities/environment';
import { VA_FORM_IDS } from 'platform/forms/constants';
import GetFormHelp from '../../components/GetFormHelp';
import ErrorText from '../../components/ErrorText';
import preSubmitInfo from 'platform/forms/preSubmitInfo';

import educationTypeUISchema from '../../definitions/educationType';
import serviceBefore1977UI from '../../definitions/serviceBefore1977';
import * as toursOfDuty from '../../definitions/toursOfDuty.jsx';

import createContactInformationPage from '../../pages/contactInformation';
import createOldSchoolPage from '../../pages/oldSchool';
import createDirectDepositChangePage from '../../pages/directDepositChange';
import createApplicantInformationPage from 'platform/forms/pages/applicantInformation';

import { showSchoolAddress } from '../../utils/helpers';
import { benefitsLabels } from '../../utils/labels';
import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

const {
  benefit,
  civilianBenefitsAssistance,
  educationObjective,
  nonVaAssistance,
} = fullSchema1995Stem.properties;

const {
  preferredContactMethod,
  educationType,
  date,
  dateRange,
  serviceBefore1977,
} = fullSchema1995Stem.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: `${environment.API_URL}/v0/education_benefits_claims/1995`,
  trackingPrefix: 'edu-1995-STEM-',
  formId: VA_FORM_IDS.FORM_22_1995_STEM,
  version: 1,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for education benefits.',
    noAuth:
      'Please sign in again to resume your application for education benefits.',
  },
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  defaultDefinitions: {
    preferredContactMethod,
    serviceBefore1977,
    date,
    dateRange,
  },
  title: 'Update your education benefits',
  subTitle: 'Form 22-1995-STEM',
  preSubmitInfo,
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  errorText: ErrorText,
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: createApplicantInformationPage(
          fullSchema1995Stem,
          {
            isVeteran: true,
            fields: [
              'veteranFullName',
              'veteranSocialSecurityNumber',
              'view:noSSN',
              'vaFileNumber',
            ],
            required: ['veteranFullName'],
          },
        ),
      },
    },
    benefitSelection: {
      title: 'Education Benefit',
      pages: {
        benefitSelection: {
          title: 'Education benefit',
          path: 'benefits/eligibility',
          initialData: {},
          uiSchema: {
            benefit: {
              'ui:widget': 'radio',
              'ui:title': 'Which benefit are you currently using?',
              'ui:options': {
                labels: benefitsLabels,
              },
            },
          },
          schema: {
            type: 'object',
            properties: {
              benefit,
            },
          },
        },
      },
    },
    militaryService: {
      title: 'Military History',
      pages: {
        servicePeriods: {
          path: 'military/service',
          title: 'Service periods',
          initialData: {},
          uiSchema: {
            'view:newService': {
              'ui:title':
                'Do you have any new periods of service to record since you last applied for education benefits?',
              'ui:widget': 'yesNo',
            },
            toursOfDuty: _.merge(toursOfDuty.uiSchema, {
              'ui:options': { expandUnder: 'view:newService' },
            }),
          },
          schema: {
            type: 'object',
            properties: {
              'view:newService': {
                type: 'boolean',
              },
              toursOfDuty: fullSchema1995Stem.properties.toursOfDuty,
            },
          },
        },
        militaryHistory: {
          title: 'Military history',
          path: 'military/history',
          initialData: {},
          uiSchema: {
            'view:hasServiceBefore1978': {
              'ui:title':
                'Do you have any periods of service that began before 1978?',
              'ui:widget': 'yesNo',
            },
          },
          schema: {
            type: 'object',
            properties: {
              'view:hasServiceBefore1978': {
                type: 'boolean',
              },
            },
          },
        },
      },
    },
    schoolSelection: {
      title: 'School Selection',
      pages: {
        newSchool: {
          path: 'school-selection/new-school',
          title:
            'School, university, program, or training facility you want to attend',
          initialData: {
            newSchoolAddress: {},
          },
          uiSchema: {
            'ui:title':
              'School, university, program, or training facility you want to attend',
            // Broken up because we need to fit educationType between name and address
            // Put back together again in transform()
            newSchoolName: {
              'ui:title': 'Name of school, university, or training facility',
            },
            educationType: educationTypeUISchema,
            newSchoolAddress: _.merge(address.uiSchema(), {
              'ui:options': {
                hideIf: formData => !showSchoolAddress(formData.educationType),
              },
            }),
            educationObjective: {
              'ui:title':
                'Education or career goal (for example, “Get a bachelor’s degree in criminal justice” or “Get an HVAC technician certificate” or “Become a police officer.”)',
              'ui:widget': 'textarea',
            },
            nonVaAssistance: {
              'ui:title':
                'Are you getting, or do you expect to get any money (including, but not limited to, federal tuition assistance) from the Armed Forces or public health services for any part of your coursework or training?',
              'ui:widget': 'yesNo',
            },
            civilianBenefitsAssistance: {
              'ui:title':
                'Are you getting benefits from the U.S. Government as a civilian employee during the same time as you’re seeking benefits from VA?',
              'ui:widget': 'yesNo',
            },
          },
          schema: {
            type: 'object',
            required: ['educationType', 'newSchoolName'],
            properties: {
              newSchoolName: {
                type: 'string',
              },
              educationType,
              newSchoolAddress: address.schema(fullSchema1995Stem),
              educationObjective,
              nonVaAssistance,
              civilianBenefitsAssistance,
            },
          },
        },
        oldSchool: createOldSchoolPage(fullSchema1995Stem),
      },
    },
    personalInformation: {
      title: 'Personal Information',
      pages: {
        contactInformation: createContactInformationPage(fullSchema1995Stem),
        dependents: {
          title: 'Dependents',
          path: 'personal-information/dependents',
          initialData: {},
          depends: {
            'view:hasServiceBefore1978': true,
          },
          uiSchema: {
            serviceBefore1977: serviceBefore1977UI,
          },
          schema: {
            type: 'object',
            properties: {
              serviceBefore1977,
            },
          },
        },
        directDeposit: createDirectDepositChangePage(fullSchema1995Stem),
      },
    },
  },
};

export default formConfig;
