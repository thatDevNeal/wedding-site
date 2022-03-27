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
        <div className="message" style={{textAlign: 'justify'}}>
          <p className="paragraph1">
            2020 and 2021 has been challenging, but for us, one good thing that has happened has
            been getting engaged. We know we are living in an uncertain time, but Shikha and Neal
            have planned to get married in Cancun, Mexico!
          </p> {/* paragraph1 */}
          <p className="paragraph2">
            <b>Bookings <i>MUST</i> be made through the booking link provided here: <a
              href="https://www.shaadidestinations.com/shikha-and-neal" target="_blank"
              rel="noopener noreferrer"><u>Shikha and Neal
              Resort Booking</u></a>.</b> You may <b><i><u>only</u></i></b> attend the wedding
            events when
            booking your
            resort stay through
            the link we have provided. Please be sure to read the &quot;<i>Payment and Cancellation
            Policy</i>&rdquo; section within our booking link for more information.
          </p> {/* paragraph2 */}
          <p className="paragraph3">
            <b><i>Please be sure your passport is valid for at least 6 months from the date of our
              wedding.
              It is <a
                href="https://www.rushmypassport.com/blog/passport-validity-for-top-destinations/#:~:text=If%20you%E2%80%99re%20flying,date%20you%20arrive."
                target="_blank" rel="noopener noreferrer" className="reactButtonTitle"><u>a
                law now</u></a> where your passport must be valid for at least 6 months to travel
              internationally. This means your passport must valid until, at minimum, June
              2023! </i></b>
          </p> {/* paragraph3 */}
          <p className="paragraph4">
            We hope to see you soon, whether its at the events or down the road when we can get
            together a little bit easier.
            We look forward to seeing you!
          </p> {/* paragraph4 */}
          <p className="paragraph5">
            <br/>Sending our love,
          </p> {/* paragraph5 */}
          <p className="paragraph6">
            Shikha & Neal
          </p>
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
