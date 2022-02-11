import React, { useEffect, useRef } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { AutoAuthenticate } from "../store/Actions/AuthActions";
import Terms from "../containers/PrivacyPolicies/Terms";
import Policies from "../containers/PrivacyPolicies/Policies";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Portifolio from "./Pages/Portifolio/Portifolio";
import ServicePage from "./Pages/Services/ServicePage";

const App = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    AutoAuthenticate(dispatch);
  }, [dispatch]);

  return (
    <Theme>
      <Router>
        <Paper elevation={0} square>
          <AppBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/register" exact element={<RegisterForm />} />
            <Route path="/services" exact element={<ServicePage />} />
            <Route path="/portifolio" exact element={<Portifolio />} />
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="/terms-of-services" exact element={<Terms />} />
            <Route path="/privacy-policies" exact element={<Policies />} />
          </Routes>
          <BackToTop />
          <Footer />
        </Paper>
      </Router>
    </Theme>
  );
};

export default App;
