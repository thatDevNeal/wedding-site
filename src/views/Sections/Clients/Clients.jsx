import React from "react";

import './Clients.scss'
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import {Container, Row} from "react-bootstrap";
import Box from '@mui/material/Box';

const Clients = ({frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {anchor, header, subheader} = frontmatter;

  const dressCode = "Dress Code in More Information";
  const day1 = "Day 1, Saturday";
  const day2 = "Day 2, Sunday";
  const day3 = "Day 3, Monday";

  return (<div className="outerWrapper">
    <PageSection className="bg-light" id={anchor}>
      <SectionHeader header={header} subheader={subheader}/>
      <Container fluid="sx">
        <Row>
          {/* event 1 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-1">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Welcome Party</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 12, 2022</li>
                  <li>{day1}</li>
                  <li>5pm - 9pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-1" className="btn btn--green">More Information!</a>
            </div>
          </Box>
          {/* event 2 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-2">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">Pithi + Grah Shantak</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 13, 2022</li>
                  <li>{day2}</li>
                  <li>8am - 2pm EST</li>
                  <li>Location: Beach</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-2" className="btn btn--green">More Information!</a>
            </div>
          </Box>
          {/* event 3 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-3">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Sangeet</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 13, 2022</li>
                  <li>{day2}</li>
                  <li>6pm - 10pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-3" className="btn btn--green">More Information!</a>
            </div>
          </Box>
        </Row>
        <Row>
          {/* event 4 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-4">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Bharaat</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 14, 2022</li>
                  <li>{day3}</li>
                  <li>9am - 10am EST</li>
                  <li>Location: Beach</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-4" className="btn btn--green">More Information!</a>
            </div>
          </Box>
          {/* event 5 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-5">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Ceremony</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 14, 2022</li>
                  <li>{day3}</li>
                  <li>10am - 1pm EST</li>
                  <li>Location: Beach</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-5" className="btn btn--green">More Information!</a>
            </div>
          </Box>
          {/* event 6 */}
          <Box sx={{minWidth: 275}} padding="1rem" id="card-6">
            <div className="card card__side card__side--front">
              <div className="card__picture">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span
                  className="card__heading-span">The Reception</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>November 14, 2022</li>
                  <li>{day3}</li>
                  <li>7pm - 12am EST</li>
                  <li>Location: Ballroom</li>
                  <li><i>{dressCode}</i></li>
                </ul>
              </div>
              <a href="#popup-6" className="btn btn--green">More Information!</a>
            </div>
          </Box>
        </Row>
      </Container>
    </PageSection>
    {/* Event 1 popup */}
    <div className="popup" id="popup-1">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-1" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-1" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
    {/* Event 2 popup */}
    <div className="popup" id="popup-2">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-2" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-2" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
    {/* Event 3 popup */}
    <div className="popup" id="popup-3">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-3" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-3" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
    {/* Event 4 popup */}
    <div className="popup" id="popup-4">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-4" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-4" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
    {/* Event 5 popup */}
    <div className="popup" id="popup-5">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-5" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-5" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
    {/* Event 6 popup */}
    <div className="popup" id="popup-6">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#card-6" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read
            these terms before booking</h3>
          <p className="popup__text">Body Text</p>
          <a href="#card-6" className="btn btn--green">Close</a>
        </div>
      </div>
    </div>
  </div>)
};

Clients.propTypes = {
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  frontmatter: null,
};

export default Clients;
