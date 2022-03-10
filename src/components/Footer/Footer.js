import { createSvgIcon } from "@material-ui/core";
import {
  EmailOutlined,
  PhoneOutlined,
  RoomOutlined,
} from "@material-ui/icons";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MenuIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import SocialMedia from "../Pages/ContactUs/SocialMedia";
import { ProjectData } from "../../containers/ProjectData/ProjectData";
export const Fb = createSvgIcon(
  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />,
  "Fb"
);

const Footer = () => {
  let getCurrentYear = new Date().getFullYear();
  return (
    <Container fluid className={classes.dav__footer}>
      <Row className={classes.dav__footer_top}>
        <Col
          lg={3}
          md={6}
          sm={6}
          className={classes.dav__footer_section_col_wrapper}
        >
          <div className={`${classes.dav__footer_section_title_wrapper}`}>
            <h5>About Us</h5>

            <p>
              We are a general merchandise company with a niche in general
              supplies, consultancy, design and construction at the national and
              international standards.
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          md={6}
          sm={6}
          className={classes.dav__footer_section_col_wrapper}
        >
          <div className={`${classes.dav__footer_section_title_wrapper}`}>
            <h5>Ongoing Projects</h5>

            <ul className={classes.dav__footer_safaris}>
              {ProjectData.slice(0,2).map((project) => {
                return (
                  <li key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                      <MenuIcon />
                      {project.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col
          lg={3}
          md={6}
          sm={6}
          className={classes.dav__footer_section_col_wrapper}
        >
          <div className={`${classes.dav__footer_section_title_wrapper}`}>
            <h5>Follow Us</h5>

            <SocialMedia />
          </div>
        </Col>
        <Col
          lg={3}
          md={6}
          sm={6}
          className={classes.dav__footer_section_col_wrapper}
        >
          <div className={`${classes.dav__footer_section_title_wrapper}`}>
            <h5>Contact info</h5>

            <ul className={classes.dav__contact_info}>
              <li>
                <RoomOutlined /> Plot 2, 8th Streat, City Star Building,
                Industrial Area. P.O Box 36323, Kampala
              </li>
              <li>
                <WhatsAppIcon />
                <a href="https://wa.link/7j8eyz">+256778600932</a>{" "}
              </li>
              <li>
                <PhoneOutlined />
                <a href="tel:+256740111199">+256740111199</a>{" "}
              </li>
              <li>
                <EmailOutlined />
                <a href="mailto:info@herveyholdings.com">
                  info@herveyholdings.com
                </a>
              </li>
              <li>
                <EmailOutlined />
                <a href="mailto:herveyholdings11@gmail.com">
                  herveyholdings11@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className={classes.dav__copyright_wrapper}>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div>
              <p>
                © {getCurrentYear} Hervey Holdings Ltd. All Rights Reserved.
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className={classes.dav__footer__menu_wrapper}
          >
            <div className={classes.dav__footer__menu}>
              <ul>
                <li>
                  <Link to="/terms-of-services">Terms of Services</Link>
                </li>
                <li>
                  <Link to="/privacy-policies">Privacy</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
