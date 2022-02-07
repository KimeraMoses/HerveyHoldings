import React from "react";
import Image from "../../assets/About-Us.jpg";
import { Col } from "react-bootstrap";
import classes from "./ProjectCard.module.css";
import { Button } from "@material-ui/core";

const ProjectCard = () => {
  return (
    <Col lg={3} md={6} sm={12} className={classes.team_card_wrapper}>
      <div
        className={classes.project_card_wrapper}
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className={classes.project_card_content}>
          <h6>
            Supply, installation and commissioning of concrete and culverts
            batching machinery plant contract at KCCA’s Kyanja yard.
          </h6>
          <div className={classes.project_card_actions}>
            <Button variant="outlined" color="secondary">View Project</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
