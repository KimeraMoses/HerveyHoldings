import React from "react";
import image from "../../../assets/About-Us.jpg";
import classes from "./AboutUs.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import About from "../../HomePage/About";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const AboutUs = () => {
  return (
    <div className={classes.about_us_wrapper}>
      <Breadcrumb title="About Us" />
      <div className={classes.about_us_content_wrapper}>
        <About />
      </div>
    </div>
  );
};

export default AboutUs;
