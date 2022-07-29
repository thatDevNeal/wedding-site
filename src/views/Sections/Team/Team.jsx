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
            Please know that your presence at our wedding is present enough! We are lucky enough
            to already have nearly everything we need for this new chapter together. <br/>
            However, for friends and family who have expressed an interest, we have created a gift
            registry for your convenience
            here: <a href="https://www.amazon.com/wedding/share/ShikhaAndNeal
" target="_blank" rel="noopener noreferrer"><b><u>Our Wedding
            Registry!</u></b></a>
            <br/><br/>
            These are just some ideas, but please feel free to gift whatever you like! We appreciate
            anything and everything. To us, your journey to celebrate with us is enough of a gift!
            <br/><br/>
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
