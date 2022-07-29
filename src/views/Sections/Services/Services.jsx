import React from "react";
import PropTypes from "prop-types";

import {Row} from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss"

const Services = ({className, frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {anchor, header: rootHeader, subheader: rootSubHeader} = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader}/>
      </Row>
      <Row>
        <div className="message">
          <p className="paragraph1">
            2020 and 2021 has been challenging, but for us, one good thing that has happened has
            been getting engaged. We know we are living in an uncertain time, but Shikha and Neal
            have planned to get married in Cancun, Mexico!
          </p> {/* paragraph1 */}
          <p className="paragraph2">
            <b>Resort bookings <i>MUST</i> be made through the booking link provided here: <a
              href="https://www.shaadidestinations.com/shikha-and-neal" target="_blank"
              rel="noopener noreferrer"><u>Shikha and Neal
              Resort Booking</u></a>.</b> You may <b><i><u>only</u></i></b> attend the wedding
            events when
            booking your
            resort stay through
            the link we have provided. Please be sure to read the &quot;<i>Payment and Cancellation
            Policy</i>&rdquo; section within our booking link for more information.
            Also, please note that these rooms have a refund policy, but they are reserved until
            the beginning of September, 2022. This means there is time for everyone to coordinate
            and book their
            rooms, there is no need to rush! <br/>
            <b><i> Please be sure your passport is valid for at least 6 months from the date of our
              wedding.
              It is <a
                href="https://www.rushmypassport.com/blog/passport-validity-for-top-destinations/#:~:text=If%20you%E2%80%99re%20flying,date%20you%20arrive."
                target="_blank" rel="noopener noreferrer" className="reactButtonTitle"><u>a
                law now</u></a> where your passport must be valid for at least 6 months to travel
              internationally. This means your passport must valid until, at minimum, June
              2023! </i></b>
          </p> {/* paragraph2 */}
          <p className="paragraph3">
            We hope to see you soon, whether its at the events or down the road when we can get
            together a little bit easier.
            We look forward to seeing you!
            <br/>
            <br/>
            <b>Please note:</b> Reservations must be made through our discounted group block in
            order to
            attend wedding events. Additional charges will be required to receive wedding wristband
            required to attend wedding events if not booking through our group block with Shaadi
            Destinations (ie - using Expedia, random websites, or even Hard Rock&apos;s website
            is <b>not</b> permitted). <b>If you need to make an edit later on</b>, please reply to
            the automated email you receive with your change request. If you have any questions,
            please email them to <i>support@shaadidestinations.com</i> with subject ‘<i>Shikha and
            Neal</i>’
            or,
            of course, feel free to message either Shikha or Neal.
          </p> {/* paragraph3 */}
          <p className="paragraph4">
            <br/>Sending our love,
          </p> {/* paragraph4 */}
          <p className="paragraph5">
            Shikha & Neal
          </p> {/* paragraph5 */}
        </div>
        {/* message */}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
