import React from "react";
import PropTypes from "prop-types";

import {Container, Row, Col} from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({frontmatter}) => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            Shikha Weds Neal in Cancun, Mexico
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
