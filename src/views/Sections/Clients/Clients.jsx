import React from "react";
import './Clients.scss'
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Clients = ({className, frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {anchor, header, subheader} = frontmatter;
  return (
    <div className="outerWrapper">
      <PageSection className="bg-light" id={anchor}>
        <SectionHeader header={header} subheader={subheader}/>
      </PageSection>
    </div>
  )
};

Clients.propTypes =
  {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
  }
;

Clients.defaultProps =
  {
    className: null,
    frontmatter: null,
  }
;

export default Clients;
