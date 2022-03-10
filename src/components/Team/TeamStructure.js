import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import StructureImg from "../../assets/team-structcures.png";
import classes from "./Team.module.css";
import { TeamData } from "../../containers/TeamData/TeamData";
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
