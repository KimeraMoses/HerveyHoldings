import react, { useEffect } from "react";

import { ServicesData } from "../../../containers/ServicesData/ServicesData";
import Services from "../../Services/Services";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ServiceDetailsCard from "./ServiceDetailsCard";
import classes from "./ServicePage.module.css";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.services_wrapper}>
      <Breadcrumb title="Our Services" />
      <div className={classes.service_details_wrapper}>
        {ServicesData.map((service, index) => {
          return <ServiceDetailsCard service={service} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ServicePage;
