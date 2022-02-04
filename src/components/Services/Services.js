import React from "react";
import { Container, Row } from "react-bootstrap";
import { ServicesData } from "../../containers/ServicesData/ServicesData";
import ServiceCard from "./ServiceCard";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section>
      <Container fluid className={classes.services_wrapper}>
        <h3 className={classes.section__title}>What we do</h3>
        <Row className={classes.services__row}>
          {ServicesData.map((service, index) => {
            return (
              <ServiceCard
                name={service.name}
                desc={service.description}
                num={index}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
