import React from "react";
import { Container } from "react-bootstrap";
import StructureImg from "../../assets/team-structcures.png";
import classes from "./TeamStructure.module.css";
import SectionTitle from "../HomePage/SectionTitle/SectionTitle";

const TeamStructure = () => {
  return (
    <Container fluid className={classes.team_section}>
      <SectionTitle title="Management Team Structure"/>
      <div className={classes.team_structure}>
          <img src={StructureImg} alt="management team"/>
        </div>
    </Container>
  );
};

export default TeamStructure;
