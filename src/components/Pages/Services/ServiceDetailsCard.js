import React from "react";
import Image from "../../../assets/ceo.jpg";
import { ServicesData } from "../../../containers/ServicesData/ServicesData";
import classes from "./ServiceDetailsCard.module.css";

const ServiceDetailsCard = ({service, key}) => {
  return (
    <div className={classes.services_details_wrappers} id="service1" key={key}>
      <div className={classes.service_details}>
        <div
          className={classes.service_image_wrapper}
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></div>
        <div className={classes.service_details_content_wrapper}>
          <h4>{service.name}</h4>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;