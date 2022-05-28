import React from "react";
import { Container } from "react-bootstrap";
import StructureImg from "../../assets/team-structure-hervey.jpeg";
import classes from "./TeamStructure.module.css";
import SectionTitle from "../HomePage/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const TeamStructure = () => {
  return (
    <Container fluid className={classes.team_section}>
      <SectionTitle title="Management Team Structure" />
      <div className={classes.team_structure}>
        <img src={StructureImg} alt="management team" />
      </div>

      <div className={classes.ad_team_link_wrapper}>
        <Link to="hervey-advisory-board">Our Advisory Team</Link>
      </div>
    </Container>
  );
};

export default TeamStructure;
