import React from "react";
import Projects from "../../Projects/Projects";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import classes from "./Portifolio.module.css";

const Portifolio = () => {
  return (
    <div className={classes.portifolio_wrapper}>
      <Breadcrumb title="Portifolio" />
      <Projects/>
    </div>
  );
};

export default Portifolio;
