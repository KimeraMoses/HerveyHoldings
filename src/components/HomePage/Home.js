import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

//===COMPONENT IMPORTS===
import Wrapper from "../../containers/hoc/wrapper";
import Partners from "../Partners/Partners";
import Slideshow from "../HeroSection/SlideShow";
import About from "./About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";

const Home = () => {
  return (
    <Wrapper>
      <Slideshow />
      <About />
      <Services />
      <Team />
      <Testimonial />
      <Partners />
    </Wrapper>
  );
};
export default Home;
