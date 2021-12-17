import React from "react";
import PropTypes from "prop-types";

import {Container, Row, Col} from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

import "./Footer.scss";

const Footer = ({frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    social: {facebook, github, linkedin, instagram}
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="copyright credit">
            <div className="nameAndLink">
              ©&nbsp;
              <a
                href="https://nealbharucha.com/"
                target="_blank"
                rel="noreferrer"
              >
                Neal Bharucha
              </a>
              , 2021
            </div>
            <div className="socials">
              {github ? <SocialIcons.Github className="footerSocial" userName={github}/> : null}
              {linkedin ?
                <SocialIcons.Linkedin className="footerSocial" userName={linkedin}/> : null}
            </div>
          </Col> {/* copyright */}
          <Col className="anaIsabel credit">
            <div className="nameAndLink">
              Photos by&nbsp;
              <a
                href="https://rebeccalori.com/"
                target="_blank"
                rel="noreferrer"
              >
                Rebecca Lori Photography
              </a>
            </div>
            <div className="socials">
              {instagram ?
                <SocialIcons.Instagram className="footerSocial" userName={instagram}/> : null}
              {facebook ?
                <SocialIcons.Facebook className="footerSocial" userName={facebook}/> : null}
            </div>
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
