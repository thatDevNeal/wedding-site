import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from 'react-countdown';
import {CopyToClipboard} from "react-copy-to-clipboard";
import Notifications, {notify} from "react-notify-toast";


import {Row, Button} from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/portfolio/Youtube.jpg";
import "./Portfolio.scss";

const Portfolio = ({className, frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {anchor, header, subheader} = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = {background: "#DFB2A9", text: "white"};
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  const slideImages = [
    {
      url: "content/assets/images/shikha-neal-portraits-4.jpg",
      caption: "Slide 1"
    },
    {
      url: "content/assets/images/shikha-neal-proposal-36.jpg",
      caption: "Slide 2"
    }
  ]

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
            The ceremony is now live!
          </div>
        {/* joinButtonWrapper */}
        <div className="vendors">
            <p>
              Hosted at
              <a
                href="https://www.hardrockhotels.com/cancun/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Hard Rock Hotel in Cancun
              </a>
            </p>
            <p>
              Officiated by
              <span className="text-primary">
                {" "} A close relation Pundit
              </span>
            </p>
            <p>
              Music provided by
              <a
                href="http://cellobosco.com/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                DJ
              </a>
            </p>
            <p>
              Stay tuned for photos by
              <a
                href="https://fedesalmeron.com/"
                className="countdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Saptapadi Studio
              </a>
              !
            </p>
          </div>
        {/* vendors */}
      </span> // finishedCountdown
    )
  }


  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <Completionist/>;
    }
    if ((days === 0 && hours === 0 && minutes === 15 && seconds === 0) || (days === 0 && hours === 0 && minutes < 15)) {
      return <div>
        <div className="countdownAndMusic">
          <div className="countdownIntro">
            The ceremony will begin in
          </div>
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {days}
                </div>
                <div className="unit">
                  days
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {hours}
                </div>
                <div className="unit">
                  hours
                </div>
              </div>
            </div>
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {minutes}
                </div>
                <div className="unit">
                  minutes
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {seconds}
                </div>
                <div className="unit">
                  seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    // Render a countdown
    return <span>
        <div className="countdownAndTanuki">
          <div className="countdownIntro">
            The ceremony will begin in
          </div>
          {/* countdownIntro */}
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {days} 
                </div>
                {/* count */}
                <div className="unit">
                  days
                </div>
                {/* unit */}
              </div>
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">
                  {hours} 
                </div>
                {/* count */}
                <div className="unit">
                  hours
                </div>
                {/* unit */}
              </div>
              {/* countWrapper */}
            </div>
            {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {minutes} 
                </div>
                {/* count */}
                <div className="unit">
                  minutes
                </div>
                {/* unit */}
              </div>
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">
                  {seconds} 
                </div>
                {/* count */}
                <div className="unit">
                  seconds
                </div>
                {/* unit */}
              </div>
              {/* countWrapper */}
            </div>
            {/* countdownSection */}
          </div>
          {/* countdownWrapper */}
          <div className="instaWrapper">
            <p className="checkOut">
              Check out 
              <a
                href="https://rebeccalori.com/2021/11/20/hoboken-pier-a-november-proposal/"
                className="spacedCountdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                  this blog on Shikha & Neals Proposal
              </a>!
              <br/>
              <CopyToClipboard text="#ShikhaAndNeal2022">
                <button
                  type="button"
                  onClick={copiedToClipboard}
                  className="invisibleButton text-muted text-primary"
                >
                  <b>#ShikhaAndNeal2022</b>
                </button>
              </CopyToClipboard>
              to share the memories!
            </p>
          </div>
          {/* instaWrapper */}
        </div>
      {/* countdownAndTanuki */}
      </span>;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("portfolio-section", className)} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}}/>
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader}/>
          <CopyToClipboard text="#ShikhaAndNeal2022">
            <button
              onClick={copiedToClipboard}
              id="copy-to-clipboard"
              variant="primary"
              type="button"
              size="xl"
              className="hashtag"
            >
              #ShikhaAndNeal2022
            </button>
          </CopyToClipboard>
        </Row>
        <div className="countdownAndVideoDiv">
          <Row>
            <Countdown
              date='2022-11-14T10:00:00-05:00'
              renderer={renderer}
            />
          </Row>
          {/* TODO: react slideshow */}
          <Row>
            <a
              href="https://www.youtube.com/watch?v=Vtvb0uDw7Uw"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div
                className="container"
              >
                <img
                  src={Youtube}
                  alt="youtubeLink"
                  className="image"
                  width="560"
                  height="auto"
                />
                <div className="middle">
                  <img
                    src={Youtube}
                    alt="youtubeLink"
                    className="imageHover"
                    width="560"
                    height="auto"
                  />
                </div>
                {/* middle */}
              </div>
              {/* container */}
            </a>
          </Row>
        </div>
        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
