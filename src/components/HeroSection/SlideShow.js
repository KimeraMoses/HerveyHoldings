import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./SlideShow.module.css";
import Image1 from "../../assets/hervey-team-2.jpeg";
import Image2 from "../../assets/Upper-nile.jpg";
import Image3 from "../../assets/About-Us.jpg";
import Image4 from "../../assets/hervey-team.jpeg";

const HeroSlider = [
  {
    image: Image1,
  },
  {
    image: Image4,
  },
  {
    image: Image3,
  },
  {
    image: Image2,
  },
];

const Slideshow = () => {
  return (
    <div className={classes.slider__wrapper}>
      <Slide easing="ease" cssClass="homeslider" arrows={false} duration={2000}>
        {HeroSlider.map((servcie) => {
          return (
            <div className={classes.each_slide} key={servcie.image}>
              <div
                style={{
                  backgroundImage: `url(${servcie.image})`,
                  backgroundPosition: "center center",
                }}
              >
                <span className={classes.dav__slider_content}>
                  <h2>All your needs in one place</h2>
                  <p>
                    Our skilled and specialist professionals offer unmatched
                    services to our growing client base across our specialist
                    fields of Agribusiness, infrastructure, logistics, industry
                    and natural resources.
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
