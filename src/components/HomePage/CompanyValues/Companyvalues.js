import React from 'react';
import classes from "./Companyvalues.module.css";

const Companyvalues = () => {
  return (
  <div className={classes.values__wrapper}>
      <div className={classes.core_values_wrapper}>
          COre Values
      </div>
      <div className={classes.vision_wrapper}>
          Visions
      </div>
      <div className={classes.mission_wrapper}>
          Mission
      </div>
  </div>
  );
};

export default Companyvalues;
