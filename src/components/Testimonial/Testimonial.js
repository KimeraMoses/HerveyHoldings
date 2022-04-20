import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  // const properties = {
  //   duration: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   indicators: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <Container fluid className={classes.testimonial_wrapper}>
        <Row className="justify-content-center mb-5">
          <div className={`col-md-7 text-center ${classes.heading_section}`}>
            <span className={classes.subheading}>What Our Cliets Say</span>
            <h2 className="mb-3">Testimonials</h2>
          </div>
        </Row>
        <Container>
          <div className={classes.testimonial_slider_wrapper}>
            <TestimonialCard />
            {/* <Slide
              easing="ease"
              cssClass={classes.testimonial__slider}
              {...properties}
            >
              {ServicesData.map((service, index) => {
                return (
                  <div className={classes.each_slide}>
                    <TestimonialCard key={index}/>
                  </div>
                );
              })}
            </Slide> */}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Testimonial;
