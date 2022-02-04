import react from "react";
import { Col } from "react-bootstrap";
import classes from "./TeamCard.module.css";

const TeamCard = ({Team}) => {
  return (
    <Col lg={4} md={6} sm={12} className={classes.team_card_wrapper}>
      <div className={classes.team_card}>
        <div
          className={classes.team_image_wrapper}
          style={{
            backgroundImage: `url(${Team.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></div>
        <div className={classes.team_info_wrapper}>
          <div className={classes.team_name}>
            <h5>{Team.name}</h5>
          </div>
          <div className={classes.team__position}><h6>{Team.role}</h6></div>
        </div>
      </div>
    </Col>
  );
};
export default TeamCard;
