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
      <div className={classes.extra_services_wrapper}>
        <p>
          As a company, we also get involved in additional design works such as
          drainages, sewage systems, modifications of structural units, steel
          reinforcement etc. during the construction process. We focus on
          various types of construction projects which include:
        </p>
        <ul>
          <li>Building-commercial housing or business building</li>
          <li>Electrical -electrical systems</li>
          <li>Mechanical - plumbing, heating or air conditioning</li>
          <li>
            Highway or Heavy - bridges, airports, waterways and wastewater
            systems
          </li>
          <li>Tree Cutting and Transportation of Wood and Timber</li>
        </ul>
        {/* In events where sub-contracts specialized work to other sub-consultants,
        supervises these sub-consultants to ensure quality control, good
        workmanship, and timely implementation of those services. */}
        <p></p>
      </div>
    </div>
  );
};
export default ServicePage;
