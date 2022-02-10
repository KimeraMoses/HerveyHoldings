import React, { useEffect } from "react";
import classes from "./AboutUs.module.css";
import { Link } from "react-router-dom";
import About from "../../HomePage/About";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MisionVision from "./MissionVision/MisionVision";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.about_us_wrapper}>
      <Breadcrumb title="About Us" />
      <div className={classes.about_us_content_wrapper}>
        <About />
        <MisionVision />
      </div>
    </div>
  );
};

export default AboutUs;
