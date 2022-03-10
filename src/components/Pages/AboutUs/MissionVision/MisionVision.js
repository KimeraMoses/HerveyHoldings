import React from "react";
import MisionIcon from "@material-ui/icons/EmojiObjectsOutlined";
import VisionIcon from "@material-ui/icons/VisibilityOutlined";
import ValuesIcon from "@material-ui/icons/PolicyOutlined";
import classes from "./MisionVision.module.css";
import SectionTitle from "../../../HomePage/SectionTitle/SectionTitle";

const MisionVision = () => {
  return (
    <>
      <div className={classes.about_us_mission}>
        <SectionTitle title="Hervey Values" />
        <p>
          As Hervey Holdings Ltd, we aim at continually exploring innovations and technologies that
          will enable us to provide our clients with the highest quality work,
          in the most efficient, ethical and integral manner while maximizing
          the value of every resource available and equipping staff with the
          best professional techniques recognized internationally across a
          broader spectrum of industries that we are involved in.
        </p>
      </div>
      <div className={classes.company_vision_wrapper}>
        <div className={classes.vision_hero_wrapper}></div>
        <div className={classes.vision_content_wrapper}>
          <div className={classes.vision_wrapper}>
            <div
              className={`${classes.vision_icon_wrapper} ${classes.icon_wrapper}`}
            >
              <VisionIcon />
            </div>
            <div className={classes.vision_content}>
              <h3>Vision</h3>
              <p>To become the leading goods and service company</p>
            </div>
          </div>
          <div className={classes.vision_wrapper}>
            <div
              className={`${classes.mission_icon_wrapper} ${classes.icon_wrapper}`}
            >
              <MisionIcon />
            </div>
            <div className={classes.vision_content}>
              <h3>Mission</h3>
              <p>To deliver quality goods and services to clients</p>
            </div>
          </div>
          <div
            className={`${classes.vision_wrapper} ${classes.core_values_wrapper}`}
          >
            <div
              className={`${classes.values_icon_wrapper} ${classes.icon_wrapper}`}
            >
              <ValuesIcon />
            </div>
            <div className={`${classes.vision_content} ${classes.core_values}`}>
              <h3>Core Values</h3>
              <ul>
                <li>Promptness</li>
                <li>Professionalism</li>
                <li>Team work</li>
                <li>Integrity</li>
                <li>Client Satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MisionVision;
