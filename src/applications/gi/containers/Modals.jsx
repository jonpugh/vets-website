import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from '@department-of-veterans-affairs/formation-react/Modal';

export class Modals extends React.Component {
  calcBeneficiaryLocationQuestionContent = () => (
    <div>
      <h3>Location where you'll take classes</h3>
      <p>
        VA pays monthly housing allowance (MHA) based on the campus location
        where you physically attend the majority of your classes.
      </p>

      <p>
        <strong>A campus could include:</strong>
      </p>
      <ul>
        <li>
          A main campus: the location where the primary teaching facilities of
          an educational institution are located
        </li>
        <li>
          A branch campus: the location of an educational institution that is
          geographically apart from and operationally independent of the main
          campus of the educational institution
        </li>
        <li>
          An extension campus: the location that is geographically apart from
          the main or branch campus but is operationally dependent on that
          campus for the performance of administrative tasks
        </li>
      </ul>
      <p>
        Learn more about the{' '}
        <a
          href="https://www.va.gov/education/about-gi-bill-benefits/post-9-11#location-based107"
          target="_blank"
          rel="noopener noreferrer"
        >
          Location-Based Housing Allowance.
        </a>
      </p>
    </div>
  );
  shouldDisplayModal = modal => this.props.modals.displaying === modal;

  renderProfilePageModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('retention')}
      >
        <h3>Retention rate</h3>
        <p>
          The share of first-time, full-time undergraduates who returned to the
          institution after their freshman year.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('gradrates')}
      >
        <h3>Graduation rate</h3>
        <p>
          The graduation rate after six years for schools that mostly award
          four-year degrees and after four years for all other schools. These
          rates are only for full-time students enrolled for the first time.
        </p>
        <p>
          Student Veteran graduation rates measure full-time Post-9/11 GI Bill
          student’s graduation reported within the VA system while the student
          is using benefits.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('salaries')}
      >
        <h3>Average salaries</h3>
        <p>
          The median earnings of former students who received federal financial
          aid, 10 years after they started school.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('repayment')}
      >
        <h3>Repayment rate</h3>
        <p>
          The share of students who have repaid at least $1 of the principal
          balance on their federal loans within 3 years of leaving school.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('preferredProviders')}
      >
        <h3>Preferred training providers</h3>
        <p>
          A provider is “preferred” if the training facility agrees to refund
          tuition and fees to VA if the student completes the program and
          doesn’t find meaningful employment within 180 days.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('tuitionAndFees')}
      >
        <h3>Tuition and fees</h3>
        <p>
          VA pays all tuition and fees for the VET TEC program directly to the
          training provider.
        </p>
        <p>
          If you’re participating in a VET TEC program, you’ll have the same
          annual tuition and fees cap as students attending a private
          institution under the Post-9/11 GI Bill. If your tuition and fees
          exceed that cap, you’ll be responsible for paying those.
        </p>
        <p>
          Preferred Provider training programs aren’t subject to a cap on
          tuition and fees.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('scholarships')}
      >
        <h3>Scholarships</h3>
        <p>
          Are you receiving any scholarships or grants that go directly to pay
          your tuition or fees for this program? If so, add that number here.
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('payToProvider')}
      >
        <h3>VA pays to provider</h3>
        <p>
          To help ensure that Veterans find jobs, VA pays VET TEC training
          providers in three installments based on the progress and success of
          their Veteran students.
        </p>
        <p>
          Training providers receive:
          <ul>
            <li>
              An initial 25 percent of tuition and fees when the Veteran enrolls
              and begins attending the program{' '}
            </li>
            <li>
              Another 25 percent when the Veteran completes their training
            </li>
            <li>
              The remaining 50 percent once the Veteran secures meaningful
              employment in their field of study
            </li>
          </ul>
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('housingAllowance')}
      >
        <h3>Housing allowance</h3>
        <p>
          If you attend your training program in person, your housing stipend
          will be equal to the monthly military Basic Allowance for Housing
          (BAH) for an E-5 with dependents. This is based on the zip code where
          you attend your training.
        </p>
        <p>
          If you participate in an online program, your stipend will be half of
          the BAH national average for an E-5 with dependents.
        </p>
        <p>
          <strong>Note:</strong> If you don’t attend a training for a full
          month, we’ll prorate your housing payment for the days you train.
        </p>
      </Modal>
    </span>
  );

  renderProfileSchoolHeaderModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('gibillstudents')}
      >
        <h3>GI Bill students</h3>
        <p>
          The number of Veterans, service members and family members using their
          GI Bill benefits attending this school in the last calendar year. This
          includes all chapters of the GI Bill program (e.g., Post-9/11,
          Montgomery GI Bill, Reserve Education Assistance Program, and
          Vocational Rehabilitation). Keep in mind that differences in attendee
          numbers don’t necessarily mean one school is more military friendly
          than another. This information will be updated annually.
        </p>
      </Modal>
    </span>
  );

  renderProfileVeteranSummaryModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('vetgroups')}
      >
        <h3>Student Veterans group</h3>
        <p>Does this school have a student-led Veterans group on campus?</p>
        <p>
          If a school has a student Veterans group that’s not represented here,
          please email{' '}
          <a
            title="224A.VBAVACO@va.gov"
            href="mailto: 224A.VBACO@va.gov?subject=Comparison Tool"
          >
            224A.VBAVACO@va.gov
          </a>
          . . We make quarterly updates to this tool.
        </p>
        <p>
          Please note this email address is only for tool-related issues. For
          questions about your GI Bill benefits, please check this{' '}
          <a
            href="https://gibill.custhelp.com/app/utils/login_form/redirect/ask"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Ask a Question" page
          </a>
          .
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('yribbon')}
      >
        <h3>Yellow Ribbon</h3>
        <p>
          The{' '}
          <a
            title="Post-9/11 GI Bill"
            href="http://www.benefits.va.gov/gibill/post911_gibill.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Post-9/11 GI Bill
          </a>{' '}
          can cover all in-state tuition and fees at public degree granting
          schools, but may not cover all private degree granting schools and
          out-of-state tuition. The Yellow Ribbon Program provides additional
          support in those situations. Institutions voluntarily enter into an
          agreement with VA to fund uncovered charges. VA matches each dollar of
          unmet charges the institution agrees to contribute, up to the total
          cost of the tuition and fees.{' '}
          <a
            title="Click here for FAQs about the Yellow Ribbon Program"
            href="http://www.benefits.va.gov/gibill/docs/factsheets/2012_Yellow_Ribbon_Student_FAQs.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for FAQs about the Yellow Ribbon Program
          </a>
        </p>
        <p>
          Veterans and Fry Scholarship and Purple Heart recipients are entitled
          to the maximum benefit rate or their designated transferees can
          receive this funding. Active-duty service members and their spouses
          aren’t eligible for this program (child transferees of active-duty
          service members may be eligible if the service member is qualified at
          the 100% rate). This information will be updated quarterly.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('poe')}
      >
        <h3>Principles of Excellence</h3>
        <p>
          The{' '}
          <a
            title="Principles of Excellence"
            href="http://www.gpo.gov/fdsys/pkg/FR-2012-05-02/pdf/2012-10715.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Principles of Excellence
          </a>{' '}
          are guidelines for educational institutions receiving federal funding.
          Schools that agree to participate will:
        </p>
        <ul className="modal-bullets">
          <li>
            End fraudulent and aggressive recruiting techniques and
            misrepresentation.
          </li>
          <li>
            Provide students with a personalized form covering the total cost of
            an education program.
          </li>
          <li>
            Provide educational plans for all military and Veteran education
            beneficiaries.
          </li>
          <li>
            Provide accommodations for service members and Reservists absent due
            to service requirements.
          </li>
          <li>
            Assign a point of contact for academic and financial advising.
          </li>
          <li>
            Make sure all new programs are accredited before they enroll
            students.
          </li>
          <li>
            Align institutional refund policies with those under Title IV.
          </li>
        </ul>
        <p>
          Foreign schools, high schools, on-the-job training and apprenticeship
          programs, residency and internship programs, and those who don’t
          charge tuition and fees aren’t asked to comply with the Principles of
          Excellence.
        </p>
        <p>
          We try to make sure this information is accurate, but prospective
          students should only use this as a planning tool. The list of
          Principles of Excellence schools will be updated quarterly.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('ta')}
      >
        <h3>Military Tuition Assistance (TA)</h3>
        <p>
          Are you receiving any military tuition assistance this year? If so,
          how much? The Post-9/11 GI Bill pays the net-cost of your education
          after scholarships or financial aid amounts are applied. This includes
          amounts already paid by military tuition assistance.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('priEnroll')}
      >
        <h3>Priority enrollment</h3>
        <p>
          If an Institution of Higher Learning (a college or university) has a
          system for priority enrollment that allows certain student Veterans to
          enroll in courses earlier than other students (not necessarily earlier
          than <strong>all</strong> students), we’ll note that with the school’s
          information here.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('onlineOnlyDistanceLearning')}
      >
        <h3>Online and distance learning</h3>
        <p>
          <p>
            Under the GI Bill you’re eligible to receive a monthly housing
            allowance if you’re enrolled in an online or distance-learning
            course.
          </p>
          <p>
            We now calculate the monthly housing allowance based on where a
            student takes their classes. So if you enroll in an online or
            distance-learning class, your housing allowance payment will be
            based on where you do most of your coursework, not on your school’s
            location.
          </p>
          <p>
            If you use your Post-9/11 GI Bill benefits while taking only
            distance-learning courses, we’ll pay you a housing allowance based
            on 50% of the national average.
          </p>
          <a href="https://www.benefits.va.gov/gibill/resources/benefits_resources/rate_tables.asp?_ga=2.144591223.39405460.1542131207-1582256389.1508352376">
            View the current housing allowance payment rates
          </a>
          .
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('eightKeys')}
      >
        <h3>8 Keys to Veteran Success</h3>
        <p>
          The “8 Keys to Veterans’ Success” are steps that postsecondary
          institutions can take to assist Veterans and service members in
          transitioning to higher education, completing their college programs,
          and obtaining career-ready skills.
        </p>
        <p>
          Postsecondary institutions listed here have stated their support for
          the 8 Keys. However, this isn’t an assurance by the U.S. Department of
          Education that an institution has actually implemented the 8 Keys. It
          also doesn’t mean that these institutions are endorsed by the U.S.
          Department of Education.
        </p>
        <p>
          To learn more about accreditation, visit the U.S. Department of
          Education’s{' '}
          <a
            href="http://www.ed.gov/veterans-and-military-families/8-keys-success-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            8 Keys to Veterans’ Success
          </a>{' '}
          page.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('vsoc')}
      >
        <h3>VetSuccess on Campus (VSOC)</h3>
        <p>
          This program supports service members, Veterans, and qualified
          dependents through on-campus counseling and help overcoming
          barriers—like accommodating disabilities or getting referrals to
          health services. It's designed to help you succeed at school and get
          ready to enter the job market in a promising career field.
        </p>
        <p>
          <a
            href="http://www.benefits.va.gov/vocrehab/vsocfactsheet.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the VSOC fact sheet
          </a>
        </p>
        <p>
          <a
            href="http://www.benefits.va.gov/vocrehab/vsoc.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about the VSOC program
          </a>
        </p>
      </Modal>
    </span>
  );

  renderProfileSummaryModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('accredited')}
      >
        <h3>Is your school accredited</h3>
        <p>
          Accreditation matters if you plan to start school at one institution
          and transfer to another to complete your degree. Be sure to ask any
          potential school about their credit transfer policy. The U.S.
          Department of Education (ED) maintains a&nbsp;
          <a
            href="http://ope.ed.gov/accreditation/"
            id="anch_384"
            target="_blank"
            rel="noopener noreferrer"
          >
            database
          </a>
          &nbsp;of accredited postsecondary institutions and programs.
          Accreditation is a recognized credential for schools and some
          programs. As stated by the ED, the goal of accreditation is to ensure
          that the education provided by institutions of higher education meets
          acceptable levels of quality.
        </p>
        <p>
          To learn more about accreditation, visit the{' '}
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#accreditation"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            about this tool
          </a>{' '}
          page.{' '}
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('typeAccredited')}
      >
        <h3>Accreditation types (regional vs. national vs. hybrid)</h3>
        <p>
          Is the school regionally or nationally accredited at the institution
          level?
        </p>
        <p>
          Schools are accredited by private educational associations of regional
          or national scope. While the Department of Education does not say
          whether regional or national accreditation is better, a recent ED
          study revealed that, “Nearly 90 percent of all student credit transfer
          opportunities occurred between institutions that were regionally,
          rather than nationally, accredited.”{' '}
          <a href="http://nces.ed.gov/pubs2014/2014163.pdf" id="anch_386">
            http://nces.ed.gov/pubs2014/2014163.pdf
          </a>
        </p>
        <p>
          To learn more about accreditation types, visit the{' '}
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#accreditation_type"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            about this tool
          </a>{' '}
          page.{' '}
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('singleContact')}
      >
        <h3>Single point of contact for Veterans</h3>
        <p>
          Does the school have a dedicated point of contact for support services
          for Veterans, military service members, and their families?
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('creditTraining')}
      >
        <h3>Credit for military training</h3>
        <p>
          Does the school offer postsecondary credit for experiences and
          military training?
        </p>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('stemIndicator')}
      >
        <h3>The Rogers STEM Scholarship</h3>
        <div>
          <p>
            The Edith Nourse Rogers STEM Scholarship provides up to 9 months of
            additional Post-9/11 GI Bill benefits, to a maximum of $30,000.
          </p>
          <p>
            Veterans and Fry Scholars may qualify for this scholarship if
            they're enrolled in an undergraduate program for Science,
            Technology, Engineering, or Math (STEM), or if they've earned a STEM
            degree and are getting a teaching certification.
          </p>
          <p>
            To learn more about this scholarship,{' '}
            <a
              href="https://benefits.va.gov/gibill/fgib/stem.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              visit the Rogers STEM Scholarship website
            </a>
            .
          </p>
        </div>
      </Modal>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('iStudy')}
      >
        <h3>Independent study</h3>
        <p>
          Beneficiaries may use educational assistance to access online learning
          (accredited independent study) at schools that aren’t Institutions of
          Higher Learning (IHLs). These schools must be postsecondary vocational
          institutions or area career and technical education schools that
          provide postsecondary level education. <strong>Note:</strong> This
          change doesn’t apply to Dependents’ Educational Assistance program
          beneficiaries.
        </p>
      </Modal>
    </span>
  );

  renderProfileHistoryModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('facilityCode')}
      >
        <h3>VA facility code</h3>
        <p>Unique identifier for VA-approved facilities.</p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('ipedsCode')}
      >
        <h3>ED IPEDS code</h3>
        <p>
          Unique identification number assigned to postsecondary institutions
          surveyed through the Integrated Postsecondary Education Data System
          (IPEDS). Also referred to as UNITID or IPEDS ID.
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('opeCode')}
      >
        <h3>ED OPE code</h3>
        <p>
          Identification number used by the U.S. Department of {'Education’s'}{' '}
          Office of Postsecondary Education (OPE) to identify schools that have
          Program Participation Agreements (PPA) so that its students are
          eligible to participate in Federal Student Financial Assistance
          programs under Title IV regulations.
        </p>
      </Modal>
    </span>
  );

  renderProfileCautionFlagModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('cautionInfo')}
      >
        <h3>Learn more about these warnings</h3>
        <p>
          These are indicators VA has determined potential students should pay
          attention to and consider before enrolling in this program. A caution
          flag means VA or other federal agencies like the Department of
          Education or Department of Defense have applied increased regulatory
          or legal scrutiny to this program. VA will display other categories of
          caution flags in future versions of the GI Bill Comparison Tool.
        </p>
        <p>
          <a
            href="https://studentaid.ed.gov/sa/about/data-center/school/hcm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heightened Cash Monitoring
          </a>
        </p>
        <p>
          <a
            href="http://ope.ed.gov/accreditation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accreditation
          </a>
        </p>
        <p>
          <a
            href="https://www.dodmou.com/Home/Faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            DoD Probation for Military Tuition Assistance
          </a>
        </p>
        <p>
          <a
            href="https://www.ftc.gov/news-events/press-releases/2016/01/ftc-brings-enforcement-action-against-devry-university"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal Trade Commission Filed Suit for Deceptive Advertising
          </a>
        </p>
        <p>
          <a
            href="http://www.justice.gov/opa/pr/profit-college-company-pay-955-million-settle-claims-illegal-recruiting-consumer-fraud-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            Settlement reached with the Federal Trade Commission (FTC)
          </a>
        </p>
        <p>
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#caution"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suspended for 85/15 violation – Flight Program
          </a>
        </p>
        <p>
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#caution"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denial of Recertification Application to Participate in the Federal
            Student Financial Assistance Programs
          </a>
        </p>
        <p>
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#ACICS"
            target="_blank"
            rel="noopener noreferrer"
          >
            School operating under provisional accreditation (previously
            accredited by ACICS)
          </a>
        </p>
        <p>
          To learn more, visit the "Caution Flag" section of the{' '}
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#caution"
            target="_blank"
            rel="noopener noreferrer"
          >
            "About this Tool"
          </a>{' '}
          page.
        </p>
      </Modal>
    </span>
  );

  renderProfileCalculatorModals = () => {
    const whenUsedGiBill = (
      <div>
        <h3 className="vads-u-padding-top--4">
          What is Section 501 (Monthly Housing Allowance Rate)?
        </h3>
        <p>
          Effective January 1, 2018, the Post-9/11 GI Bill monthly housing
          allowance rate will be the same as the Department of Defense’s E-5
          with dependents Basic Allowance Housing (BAH) rate.
        </p>
        <ul>
          <li>
            Students will receive this rate if they first used their Post-9/11
            GI Bill benefits on or after January 1, 2018.
          </li>
          <li>
            If the student started using their Post-9/11 GI Bill before January
            1, 2018, they will continue receiving payments based on the slightly
            higher VA rate eliminated by this change.
          </li>
        </ul>
      </div>
    );

    return (
      <span>
        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcTuition')}
        >
          <h3>Tuition and fees per year</h3>
          <p>
            Enter the total tuition/fees you'll be charged for the academic
            year.
          </p>
          <p>
            When you select some schools, we import the average tuition/fees for
            an undergraduate student as reported by the school to the Department
            of Education through{' '}
            <a
              href="http://nces.ed.gov/ipeds/datacenter/"
              id="anch_442"
              target="blank"
              rel="noopener noreferrer"
            >
              IPEDS
            </a>
            . This is the same information that is published on{' '}
            <a
              href="http://nces.ed.gov/collegenavigator/"
              id="anch_443"
              target="blank"
              rel="noopener noreferrer"
            >
              College Navigator
            </a>
            .
          </p>
          <p>
            To learn more, please review our "
            <a
              href={
                'http://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#yellow_ribbon_from_school'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              About This Tool
            </a>
            " page.
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcInStateTuition')}
        >
          <h3>In-state tuition and fees per year</h3>
          <p>
            Enter the amount of tuition/fees your school charges in-state
            students.
          </p>
          <p>
            When you select some schools, we import the average in-state
            tuition/fees for an undergraduate student as reported by the school
            to the Department of Education through IPEDS. This is the same
            information that is published on College Navigator.
          </p>
          <p>
            Generally, in-state residents are charged a discounted rate of
            tuition and fees. VA pays the in-state tuition & fee rate at public
            schools.{' '}
            <a
              href="https://www.benefits.va.gov/gibill/resources/benefits_resources/rate_tables.asp#ch33#TUITION"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for more information
            </a>
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcYr')}
        >
          <h3>Yellow Ribbon</h3>
          <p>
            The Post-9/11 GI Bill can cover all in-state tuition and fees at
            public degree granting schools, but may not cover all private degree
            granting schools and out-of-state tuition. The Yellow Ribbon Program
            provides additional support in those situations. Institutions
            voluntarily enter into an agreement with VA to fund uncovered
            charges. VA matches each dollar of unmet charges that the
            institution agrees to contribute, up to the total cost of the
            tuition and fees. For Frequently Asked Questions about the Yellow
            Ribbon Program, visit{' '}
            <a
              title="Click here for FAQs about the Yellow Ribbon Program"
              href="http://www.benefits.va.gov/gibill/docs/factsheets/2012_Yellow_Ribbon_Student_FAQs.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              this page.
            </a>
          </p>
          <p>
            Veterans and Fry Scholarship and Purple Heart recipients are
            entitled to the maximum benefit rate or their designated transferees
            can receive this funding. Active-duty service members and their
            spouses are not eligible for this program (child transferees of
            active-duty service members may be eligible if the service member is
            qualified at the 100% rate). This information will be updated
            quarterly.
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('whenUsedGiBill')}
        >
          {whenUsedGiBill}
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcScholarships')}
        >
          <h3>Scholarships (excluding Pell)</h3>
          <p>
            Are you receiving any scholarships or grants that go directly to pay
            tution/fees this year? If so, add that number here.
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcTuitionAssist')}
        >
          <h3>Military Tuition Assistance (TA)</h3>
          <p>
            Are you receiving any military tuition assistance this year? If so,
            how much?
          </p>
          <p>
            The Post-9/11 GI Bill pays the net-cost of your education after
            scholarships or financial aid amounts are applied. This includes
            amounts already paid by military tuition assistance.
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcEnrolled')}
        >
          <h3>Enrollment status</h3>
          <p>
            Are you considered a full-time or part-time student by your school?
            Students attending school less than full-time will get a pro-rated
            monthly housing allowance. Students attending school exactly ½ time
            or less won’t get a monthly housing allowance.
          </p>
          <p>
            For more information about MHA increases or decreases, visit{' '}
            <a
              title="For more information about MHA increases or decreases click here"
              href="https://gibill.custhelp.com/app/answers/detail/a_id/1412"
              target="_blank"
              rel="noopener noreferrer"
            >
              this page
            </a>
            .
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcSchoolCalendar')}
        >
          <h3>School calendar</h3>
          <p>
            Is your school on a semester, quarter, or non-traditional calendar
            system?
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcKicker')}
        >
          <h3>Eligible for kicker bonus?</h3>
          <p>
            A kicker bonus or college fund is an additional incentive, paid for
            by the Department of Defense, to extend a tour of duty or retain
            highly skilled military personnel. The money is a bonus on top of
            any GI Bill payments paid directly to the Veteran. To learn more,
            visit{' '}
            <a
              href="https://gibill.custhelp.com/app/answers/detail/a_id/97"
              target="_blank"
              rel="noopener noreferrer"
            >
              this page
            </a>
            .
          </p>
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcBeneficiaryLocationQuestion')}
        >
          {this.calcBeneficiaryLocationQuestionContent()}
        </Modal>

        <Modal
          onClose={this.props.hideModal}
          visible={this.shouldDisplayModal('calcWorking')}
        >
          <h3>Will be working</h3>
          <p>
            How many hours per week will you be working on your OJT /
            Apprenticeship? Beneficiaries working less than 120 hours/month (or
            approximately 30 hours/week) receive a prorated monthly housing
            allowance.
          </p>
        </Modal>
      </span>
    );
  };

  renderLandingPageModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('giBillChapter')}
      >
        <h3>Which GI Bill benefit do you want to use?</h3>
        <p>
          You may be eligible for multiple types of education and training
          programs. Different programs offer different benefits, so it’s
          important to choose the program that will best meet your needs. Use
          this tool to compare programs and schools.
        </p>
        <p>
          For detailed information on eligibility requirements and general
          program benefits, visit{' '}
          <a
            href="/education/eligibility/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this page
          </a>
          .
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('vetTec')}
      >
        <div>
          <div>
            <strong>
              <h3>VET TEC</h3>
            </strong>
          </div>

          <p>
            Veteran Employment Through Technology Education Courses (VET TEC) is
            a 5-year pilot program that matches Veterans with high-tech training
            providers. Veterans can start or advance their career in the
            high-tech industry with a training program that’ll take months—or
            just weeks—to complete.
          </p>
          <p>
            <a
              href="https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Learn more about VET TEC
            </a>
          </p>
        </div>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('cumulativeService')}
      >
        <h3>Cumulative Post-9/11 service</h3>
        <p>
          The{' '}
          <a
            title="Post-9/11 GI Bill"
            href="../post911_gibill.asp"
            id="anch_375"
          >
            Post-9/11 GI Bill
          </a>{' '}
          provides financial support for education and a housing allowance. To
          qualify for this program, you must have served after September 10,
          2001 for at least 90 days or, if you were discharged with a
          service-connected disability, for at least 30 days. You also need to
          have received an honorable discharge.
        </p>
        <p>
          For detailed information about Cumulative Post-9/11 Service, visit{' '}
          <a
            href="https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#cumulativeservice"
            target="_blank"
            rel="noopener noreferrer"
          >
            this page
          </a>
          .
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('enlistmentService')}
      >
        <h3>Completed an enlistment of (MGIB):</h3>
        <p>
          The Montgomery GI Bill – Active Duty provides education benefits to
          Veterans and service members who have served at least two years of
          active duty. When using this tool, you will need to select the length
          of your original active duty enlistment obligation in order to get an
          estimate of your monthly benefit. The amount of time you served (2
          year enlistment vs. 3+ year enlistment) will impact your monthly
          payment amount when using the Montgomery GI Bill. To learn more about
          MGIB please visit &nbsp;
          <a
            href="http://www.benefits.va.gov/gibill/mgib_ad.asp"
            id="anch_399"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.benefits.va.gov/gibill/mgib_ad.asp
          </a>
          .
        </p>
      </Modal>

      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('consecutiveService')}
      >
        <h3>Length of longest active duty tour (REAP)</h3>
        <p>
          The REAP program pays benefits to eligible Reservists or Guard members
          who were called or ordered to active duty for at least 90 consecutive
          days in response to a war or national emergency declared by the
          President or Congress. REAP payment amounts are based on length of
          consecutive days of active-duty service with rates increasing at one
          year and again at two years of consecutive service. To learn more
          about REAP please visit &nbsp;
          <a
            href="https://www.benefits.va.gov/gibill/reap.asp"
            id="anch_403"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.benefits.va.gov/gibill/reap.asp
          </a>
          .
        </p>
      </Modal>
    </span>
  );

  renderVetTecSearchResultsModals = () => (
    <span>
      <Modal
        onClose={this.props.hideModal}
        visible={this.shouldDisplayModal('preferredProvider')}
      >
        <h3>Preferred training providers</h3>
        <p>
          A provider is "preferred" if the training facility agrees to refund
          tuition and fees to VA if the student completes the program and
          doesn't find meaningful employment within 180 days.
        </p>
      </Modal>
    </span>
  );

  render() {
    return (
      <span>
        {this.renderLandingPageModals()}
        {this.renderProfilePageModals()}
        {this.renderProfileSchoolHeaderModals()}
        {this.renderProfileVeteranSummaryModals()}
        {this.renderProfileSummaryModals()}
        {this.renderProfileHistoryModals()}
        {this.renderProfileCautionFlagModals()}
        {this.renderProfileCalculatorModals()}
        {this.renderVetTecSearchResultsModals()}
      </span>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  showModal: name => {
    dispatch(actions.showModal(name));
  },
  hideModal: () => {
    dispatch(actions.showModal(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modals);
