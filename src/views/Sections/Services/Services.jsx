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
            2020 and 2021 has been a challenging, but for us, one good thing that has happened has
            been getting engaged. We know we are living in an uncertain time, but Shikha and Neal
            have planned to get married in Cancun, Mexico!
          </p> {/* paragraph1 */}
          <p className="paragraph2">
            <b>We will provide a link to book your hotel at the resort and safe transportation from
              the
              airport to the resort (round trip) in the near future. <i>Please check here time to
                time for updates!</i></b> Also, please note that these rooms
            have
            a refund policy, but they are reserved until mid-June of 2022. This means there is time
            for everyone to book their rooms.
          </p> {/* paragraph2 */}
          <p className="paragraph3">
            We hope to see you soon, whether its at the events or down the road when we can get
            together a little bit easier.
            We look forward to seeing you!
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
