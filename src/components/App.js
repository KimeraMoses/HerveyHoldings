import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//===MUI IMPORTS===
import { Paper } from "@material-ui/core";

//===REDUX STORE IMPORTS===

//===COMPONENT IMPORTS===
import Home from "./HomePage/Home";
import BackToTop from "./BackToTop/BackToTop";
import AppBar from "./AppBar/AppBar";
import Theme from "./UI/Theme/Theme";
import "./App.css";
import Footer from "./Footer/Footer";
import LoginForm from "./Membership/LoginForm/LoginForm";
import RegisterForm from "./Membership/RegisterForm/RegisterForm";
import Terms from "../containers/PrivacyPolicies/Terms";
import Policies from "../containers/PrivacyPolicies/Policies";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Portifolio from "./Pages/Portifolio/Portifolio";
import ServicePage from "./Pages/Services/ServicePage";
import OurPartners from "./Pages/Partners/OurPartners";
import PrivacyPrompt from "../containers/PrivacyPolicies/PrivacyPrompt";
import Project from "./Pages/Portifolio/Project/Project";
import ResetPassword from "./Membership/PasswordReset/PasswordReset";
import Team from "./Team/Team";

const App = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Theme>
      <Router>
        <Paper elevation={0} square>
          <AppBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/register" exact element={<RegisterForm />} />
            <Route path="/password-reset" exact element={<ResetPassword />} />
            <Route path="/services" exact element={<ServicePage />} />
            <Route path="/portifolio" exact element={<Portifolio />} />
            <Route path="/partners" exact element={<OurPartners />} />
            <Route path="/hervey-advisory-board" exact element={<Team />} />
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="/terms-of-services" exact element={<Terms />} />
            <Route path="/privacy-policies" exact element={<Policies />} />
            <Route path="/projects/:projectTitle" exact element={<Project />} />
          </Routes>
          <PrivacyPrompt />
          <BackToTop />
          <Footer />
        </Paper>
      </Router>
    </Theme>
  );
};

export default App;
