import React, { useEffect } from "react";
import Projects from "../../Projects/Projects";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import classes from "./Portifolio.module.css";

const Portifolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.portifolio_wrapper}>
      <Breadcrumb title="Portifolio" />
      <div className={classes.portifolio_wrapper_inner}>
        <p>
          Since our inception in 2019, we have built trust and credibility
          amongst partners and clients. This has ensured we access financing at
          favorable terms from our partners as well win and as well successfully
          execute project contracts for our clients. Some of these projects are
          featured below;
        </p>
      </div>
        <Projects />
    </div>
  );
};

export default Portifolio;
