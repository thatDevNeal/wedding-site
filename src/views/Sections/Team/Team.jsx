import React from "react";
import PropTypes from "prop-types";
import Notifications from "react-notify-toast";

import {Col, Row} from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({className, frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor, header: rootHeader, subheader: rootSubHeader, teamMember
  } = frontmatter;

  return (<div>
    <PageSection id={anchor}>
      <Notifications options={{zIndex: 200, top: '50px'}}/>
      <SectionHeader header={rootHeader} subheader={rootSubHeader}/>
      <Row className="charities">
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">
            Please understand that gifts are not necessary and are not expected. Your blessing is
            all we ask for.
          </p>
        </Col>
      </Row>
    </PageSection>
  </ div>);
};

Team.propTypes = {
  className: PropTypes.string, frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null, frontmatter: null,
};

export default Team;
