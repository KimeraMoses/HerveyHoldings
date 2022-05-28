import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import classes from "./Team.module.css";
import { TeamData } from "../../containers/TeamData/TeamData";
import Breadcrumb from "./../Pages/Breadcrumb/Breadcrumb";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid className={classes.team_section}>
      <Breadcrumb title="Our Advisory board" />
      <Row className={classes.team_member_wrapper}>
        {TeamData.map((team, index) => {
          return <TeamCard Team={team} />;
        })}
      </Row>
    </Container>
  );
};

export default Team;
