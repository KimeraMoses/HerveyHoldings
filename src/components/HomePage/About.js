import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/about-us-image.jpg";
import Divider from "../UI/Divider/Divider";
import classes from "./About.module.css";

const About = ({isHomePage}) => {
  return (
    <section className={classes.home__about_section_wrapper}>
      <Container>
        <Row>
          <div
            className={`col-md-6 img img-3 d-flex justify-content-center align-items-center ${classes.image__section}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="col-md-6 pl-md-5 py-5">
            <div className={classes.heading_section}>
              <Divider />
              <h2 className="mb-4">About Us</h2>
              <p>
                Hervey Holdings Ltd was incorporated in 2019 as a Limited
                Liability Company Registered in Uganda under the 2012 Company
                Act by the Uganda Registration services Bureau (URSB) taking
                over from K365 Investments and Technical Services (U) Limited
                that was incorporated in 2015. We are a logistics and construction company with a niche in general supplies, consultancy, design
                and construction at the national and international standards.
              </p>
              <p>
                Our skilled and specialist professionals offer unmatched
                services to our growing client base across our specialist fields
                of Agribusiness, infrastructure, logistics, industry and natural
                resources. In line with our tradition of delivering quality, we
                continue to aspire for further growth and quality service to our
                client by embracing innovative approaches to the traditional
                challenges food insecurity, transport, climate change,
                insufficient infrastructure and clean energy among others.
              </p>
              {isHomePage &&
              <Link to="/about-us" className={classes.btn__readmore}>
                Read More
              </Link>}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
