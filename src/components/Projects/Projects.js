import { Button } from "@material-ui/core";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../HomePage/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import classes from "./Projects.module.css";

const Project = () => {
  return (
    <Container fluid className={classes.projects_section}>
      <SectionTitle title="Our Portfolio" />
      <Row>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Row>
      <div className={classes.projects_actions_wrapper}>
        <Button variant="contained" color="secondary">
          More Projects
        </Button>
      </div>
    </Container>
  );
};

export default Project;