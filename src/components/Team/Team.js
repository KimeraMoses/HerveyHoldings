import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import classes from "./Team.module.css";
import { TeamData } from "../../containers/TeamData/TeamData";
import SectionTitle from "../HomePage/SectionTitle/SectionTitle";

const Team = () => {
  return (
    <Container fluid className={classes.team_section}>
      <SectionTitle title="Our Advisory board"/>
      <Row className={classes.team_member_wrapper}>
        {TeamData.map((team, index) => {
          return <TeamCard Team={team} />;
        })}
      </Row>
    </Container>
  );
};

export default Team;
