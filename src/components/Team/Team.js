import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import classes from "./Team.module.css";
import { TeamData } from "../../containers/TeamData/TeamData";

const Team = () => {
  return (
    <Container fluid className={classes.team_section}>
      <div className={classes.team__header_section}>
        <h2>Meet The Team</h2>
      </div>
      <Row className={classes.team_member_wrapper}>
        {TeamData.map((team, index) => {
          return <TeamCard Team={team} />;
        })}
      </Row>
    </Container>
  );
};

export default Team;
