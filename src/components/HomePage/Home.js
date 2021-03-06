import React, { useEffect } from "react";

//===COMPONENT IMPORTS===
import Wrapper from "../../containers/hoc/wrapper";
import Partners from "../Partners/Partners";
import Slideshow from "../HeroSection/SlideShow";
import About from "./About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Projects from "../Projects/Projects";
import TeamStructure from "../Team/TeamStructure";

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
      <TeamStructure />
      <Testimonial />
      <Partners />
    </Wrapper>
  );
};
export default Home;
