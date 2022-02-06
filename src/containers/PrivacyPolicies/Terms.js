import React, { useEffect } from "react";
import imageCover from "../../assets/About-Us.jpg";
import classes from "./Terms.module.css";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.dav__policies_wrapper}>
      <div
        className={classes.dav__policies_hero}
        style={{
          backgroundImage: `url(${imageCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1>Terms of Services</h1>
      </div>
      <div className={classes.dav__policies}>
        Content for terms and service goes here
      </div>
    </div>
  );
};

export default Terms;
