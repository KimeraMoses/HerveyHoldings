import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Breadcrumb.module.css";

const Breadcrumb = ({title}) => {
  return (
    <Container fluid className={classes.breadcrumb_wrapper}>
      <h1>{title}</h1>
      <nav className={classes.breadcrumb_navigation_wrapper}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{title}</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Breadcrumb;
