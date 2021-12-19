import React from "react";
import PropTypes from "prop-types";

import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Countdown from 'react-countdown';
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";
import "./Top.scss"

const Top = ({frontmatter}) => {
  if (!frontmatter) {
    return null;
  }

  const {header, subheader, imageFileName, jumpToAnchor} = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  const renderer = ({days}) => {
    if (days <= 0) {
      // Render a completed state
      return (
        // TODO: added a `hidden={true}` to hide the button for now.
        <Button size="xl" variant="primary" className="text-uppercase main-button"
                onClick={scrollToSection}>
          <p className="buttonTitle">Watch the Ceremony</p>
        </Button>
      );
    }
    return (
      <Popup
        modal
        trigger={
          <Button size="xl" variant="primary"
                  className="main-button-position text-uppercase main-button">
            <p className="buttonTitle">Add to Calendar</p>
          </Button>
        }
      >
        {close => (
          <div className="addToCalModal">
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
            <div className="calendarHeader text-uppercase"> Add to Calendar</div>
            <div className="calendarContent">
              <div className="calendarLinksWrapper">
                <div>
                  <FontAwesomeIcon icon={["fab", "google"]} className="calIcon"/>
                  <a
                    href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/generator/generator.html%0ADTSTART:20221112T230000Z%0ADTEND:20221115T060000Z%0ASUMMARY:Shikha%20and%20Neal%20Wedding%20Events%0ADESCRIPTION:Shikha%20and%20Neal%20overall%20event%20dates%20for%20their%20wedding%20in%20Cancun,%20Mexico!%20More%20information%20found%20on%20the%20website.%0ALOCATION:Cancun,%20Mexico%0AEND:VEVENT%0AEND:VCALENDAR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apple
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Shikha%20and%20Neal%20Wedding%20Events&amp;dates=20221112T230000Z/20221115T060000Z&amp;details=Shikha%20and%20Neal%20overall%20event%20dates%20for%20their%20wedding%20in%20Cancun,%20Mexico!%20More%20information%20found%20on%20the%20website.&amp;location=Cancun,%20Mexico&amp;sprop=&amp;sprop=name:"
                    target="_blank"
                    rel="noreferrer"
                  >Google</a>
                </div>
                <div>
                  <a
                    href="https://calendar.yahoo.com/?v=60&amp;view=d&amp;type=20&amp;title=Shikha%20and%20Neal%20Wedding%20Events&amp;st=20221112T170000Z&amp;dur=5500&amp;desc=Shikha%20and%20Neal%20overall%20event%20dates%20for%20their%20wedding%20in%20Cancun,%20Mexico!%20More%20information%20found%20on%20the%20website.&amp;in_loc=Cancun,%20Mexico"
                    target="_blank"
                    rel="noreferrer"
                  >Yahoo</a>
                </div>
              </div>

              {/* calendarLinksWrapper */}
            </div>
            {/* calendarContent */}
          </div> // addToCalModal
        )
        }
      </Popup>
    )
  }

  const extraInfoPart = (
    <Countdown
      date='2022-11-09T8:00:00-05:00'
      renderer={renderer}
    />
  );

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
