import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./OurStory.module.css";

const Story = (props) => {
  const { year, paragraph } = props;
  return (
    <Col md={4} sm={12} className={classes.story_line_single}>
      <div className={classes.story_year}>{year}</div>
      <div className={classes.story_line}>
        <p>{paragraph}</p>
      </div>
    </Col>
  );
};

const OurStory = () => {
  return (
    <div className={classes.our_story_wrapper}>
      <h3 className={classes.section__title}>Our Story</h3>
      <p>
        It is our strategy to approach Uganda’s challenges of unemployment,
        transport and shelter infrastructure, food insecurity, clean energy
        shortages and sanitation through innovative yet sustainable solutions.
        By leveraging our technical expertise alongside our growing vast network
        of industry partners, we are on a journey to regional market dominance
        and industry leadership.
      </p>
      <Row className={classes.story_line_wrapper}>
        <Story
          year="2015"
          paragraph="K365 Investments and Technical Services (U) Limited incorporated as limited liability in Uganda with focus on construction"
        />
        <Story
          year="2019"
          paragraph="Hervey Holdings Ltd incorporated with an ambitious strategy of growing into a global multinational corporation across the top global business sectors. Takes over from K365 Investments and Technical Services (U) Ltd."
        />
        <Story
          year="2021"
          paragraph="Hervey Holdings Ltd successfully executes national level projects and financing deals across our niche sectors of Industry, Infrastructure, logisitics, agribusiness and natural resources. Our strategy to expand across Africa is launched."
        />
        <Story
          year="2025"
          paragraph="We aspire to grow into East Africa’s powerhouse in Project financing, wealth management,business consultancy alongside our niche sectors. We look at having our proposed Namanve industrial Area manufacturing and warehouse complex completed and operational."
        />
      </Row>
    </div>
  );
};

export default OurStory;
