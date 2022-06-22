import React, { useEffect } from "react";
import Partners from "../../Partners/Partners";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import classes from "./OurPartners.module.css";

const OurPartners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.partners__wrapper}>
      <Breadcrumb title="Our Partners" />
      <div className={classes.partners__details}>
        <p>
          Hervey Holdings Ltd celebrated its 6th birthday in October
          2021, since transforming from our earlier trading name. We have since
          worked alongside the worlds major engineering companies such as the
          following;
        </p>
      </div>
      <Partners />
    </div>
  );
};

export default OurPartners;
