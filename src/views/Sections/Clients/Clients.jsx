import React from "react";

import './Clients.scss'
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import {Container, Row} from "react-bootstrap";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Clients = ({frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {anchor, header, subheader} = frontmatter;

  const card = (<fragment>
      <CardContent>
        {/* <div className="card"> */}
        <div className="card card__side card__side--front">
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
        {/* </div> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </fragment>
  );

  return (<div className="outerWrapper">
    <PageSection className="bg-light" id={anchor}>
      <SectionHeader header={header} subheader={subheader}/>
      <Container fluid="sx">
        <Row>
          {/* event 1 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 1</li>
                  <li>5pm - 9pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
          {/* event 2 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 2</li>
                  <li>8am - 2pm EST</li>
                  <li>Location: Beach</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
          {/* event 3 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 2</li>
                  <li>6pm - 10pm EST</li>
                  <li>Location: Rooftop</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
        </Row>
        <Row>
          {/* event 4 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 3</li>
                  <li>9am - 10am EST</li>
                  <li>Location: Beach</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
          {/* event 5 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 3</li>
                  <li>10am - 1pm EST</li>
                  <li>Location: Beach</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
          {/* event 6 */}
          <Box sx={{minWidth: 275}} padding="1rem">
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
                  <li>Day 3</li>
                  <li>7pm - 12am EST</li>
                  <li>Location: Ballroom</li>
                  <li><i>Dress code on other side</i></li>
                </ul>
              </div>
            </div>
          </Box>
        </Row>
      </Container>
    </PageSection>
  </div>)
};

Clients.propTypes = {
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  frontmatter: null,
};

export default Clients;
