import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../HomePage/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import classes from "./Projects.module.css";
import { ProjectData } from "../../containers/ProjectData/ProjectData";

const Project = (props) => {
  const { isHomePage } = props;

  return (
    <Container fluid className={classes.projects_section}>
      <SectionTitle title="Our Portfolio" />
      <Row>
        {ProjectData.map((project) => {
          return <ProjectCard data={project} />;
        })}

      </Row>
      {isHomePage && (
        <div className={classes.projects_actions_wrapper}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/portifolio"
          >
            More Projects
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Project;
