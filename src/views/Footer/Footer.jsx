import React from "react";
import PropTypes from "prop-types";

import {Container, Row, Col} from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {notify} from "react-notify-toast";

const copiedToClipboard = () => {
  const alertColor = {background: "#DFB2A9", text: "white"};
  notify.show(
    "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
    "custom",
    5000,
    alertColor
  );
}

const Footer = ({frontmatter}) => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <CopyToClipboard text="#ShikhaSealsTheNeal">
              <button
                type="button"
                onClick={copiedToClipboard}
                className="invisibleButton text-muted text-primary"
              >
                <b>#ShikhaSealsTheNeal</b>
              </button>
            </CopyToClipboard>
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
