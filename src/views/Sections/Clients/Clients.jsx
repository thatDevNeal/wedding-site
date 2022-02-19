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
      <div className="row bg-light">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span">The Welcome Party</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 12, 2022</li>
                  <li>Day 1</li>
                  <li>5pm - 9pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#popup" className="btn btn--white">More Information!</a>
              </div>
            </div>
          </div>
        </div>


        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span">Pithi & Grah Shantak</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 13, 2022</li>
                  <li>Day 2</li>
                  <li>8am - 2pm EST</li>
                  <li>Location: Beach</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>

            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#popup" className="btn btn--white">More Information!</a>
              </div>
            </div>
          </div>
        </div>


        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Sangeet</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 13, 2022</li>
                  <li>Day 2</li>
                  <li>6pm - 10pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>

            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <a href="#popup" className="btn btn--white">More Information!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">&times;</a>
            <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
              these terms before booking</h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio
              facilisis mauris sit
              amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque
              dignissim enim
              sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada
              pellentesque elit eget
              gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet.
              Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio
              morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet
              sit. Amet massa
              vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna
              etiam.
              Imperdiet sed
              euismod nisi porta.
            </p>
            <a href="#" className="btn btn--green">Close</a>
          </div>
        </div>
      </div>
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
