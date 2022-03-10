import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ProjectData } from "../../../../containers/ProjectData/ProjectData";
import classes from "./Project.module.css";

const Project = () => {
  const { projectTitle } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectTitle]);

  const data = ProjectData.filter((project) => project.id === projectTitle)[0];

  return (
    <div className={classes.project_wrapper}>
      <div
        className={classes.project_hero_wrapper}
        style={{
          backgroundImage: `url(${data.gallery[0]})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      >
        {/* <img src={data.gallery[0]} alit="" /> */}
      </div>
      <Container fluid className={classes.project_details_wrapper}>
        <Row>
          <Col md={9} className={classes.project_details}>
            <div className={classes.project_title_wrapper}>
              <h2>{data.title}</h2>
            </div>
            <div className={classes.details_wrapper}>
              <h5>Brief description of the works</h5>
              <ul>
                {data.work.map((work) => {
                  return <li key={work}>{work}</li>;
                })}
              </ul>
            </div>
            <div className={classes.project_gallery_wrapper}>
              {data.gallery.map((image) => {
                return (
                  <div
                    className={classes.project_gallary_image}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                );
              })}
            </div>
          </Col>
          <Col md={3} className={classes.project_summary_wrapper}>
            <div className={classes.project_summary}>
              <h4>Quick Facts</h4>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Client:</strong>
                </span>
                <span className={classes.client_title_name}>{data.client}</span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Starting Date:</strong>
                </span>
                <span className={classes.client_title_name}>{data.sDate}</span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Duration:</strong>
                </span>
                <span className={classes.client_title_name}>
                  {data.duration}
                </span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Partners:</strong>
                </span>
                <span className={classes.client_title_name}>
                  {data.partners}
                </span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Sector:</strong>
                </span>
                <span className={classes.client_title_name}>{data.sector}</span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Cost:</strong>
                </span>
                <span className={classes.client_title_name}>
                  Ugx. {data.cost}
                </span>
              </div>
              <div className={classes.project_summary__client}>
                <span className={classes.client_title}>
                  <strong>Beneficiaries:</strong>
                </span>
                <span className={classes.client_title_name}>
                  {data.beneficiaries.join(", ")}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
