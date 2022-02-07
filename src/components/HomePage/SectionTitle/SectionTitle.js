import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const { title } = props;
  return <h3 className={classes.section__title}>{title}</h3>;
};

export default SectionTitle;
