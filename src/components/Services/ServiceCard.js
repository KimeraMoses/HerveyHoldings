import React from "react";
import { Link } from "react-router-dom";
import classes from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  const { name, desc, num } = props;
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 ${classes.service__card}`}
      key={num}
    >
      <div className={`${classes.single__service} mb-50`}>
        <div className={classes.service__num}>{num + 1}</div>
        <h5>{name}</h5>

        <div className={classes.service__desc}>
          <p>{desc}</p>
        </div>
        <Link to="/services" className={classes.service__card_link}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
