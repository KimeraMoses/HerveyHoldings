import React from "react";
import image from "../../assets/background.webp";
import classes from "./AboutUs.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={classes.about_us_wrapper}>
      <div
        className={classes.dav__about_us_hero}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className={classes.dav__about_us_title}>
          <h2>About Us</h2>
        </div>
      </div>
      <div className={classes.about_us_content_wrapper}>About Us Content Here</div>
    </div>
  );
};

export default AboutUs;
