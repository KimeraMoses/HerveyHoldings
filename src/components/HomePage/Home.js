import React, { useEffect } from "react";

//===COMPONENT IMPORTS===
import Wrapper from "../../containers/hoc/wrapper";
import Partners from "../Partners/Partners";
import Slideshow from "../HeroSection/SlideShow";
import About from "./About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import Projects from "../Projects/Projects";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Slideshow />
      <About isHomePage={true} />
      <Services isHomePage={true} />
      <Projects isHomePage={true} />
      <Team />
      <Testimonial />
      <Partners />
    </Wrapper>
  );
};
export default Home;
