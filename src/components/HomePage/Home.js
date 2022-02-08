import React from "react";

//===COMPONENT IMPORTS===
import Wrapper from "../../containers/hoc/wrapper";
import Partners from "../Partners/Partners";
import Slideshow from "../HeroSection/SlideShow";
import About from "./About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <Wrapper>
      <Slideshow />
      <About />
      <Services />
      <Project />
      <Team />
      <Testimonial />
      <Partners />
    </Wrapper>
  );
};
export default Home;
