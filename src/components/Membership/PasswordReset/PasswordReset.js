import React, { useEffect } from "react";
import classes from "../Membership.module.css";
import {
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid>
      <section className={classes.gpa__registration_section}>
        <Paper className={classes.dav__membership_form_wrapper}>
          <div className={classes.dav__membership_form_wrapper_inner}>
            <div className={classes.dav__membership_row}>
              <div
                className={`col-xs-12 col-sm-6 ${classes.dav__membership_form_side}`}
              >
                <div className={classes.dav__registration_hero}>
               

                  <h1>Forgot Password</h1>
                  <p>
                    Enter your e-mail address and we will send you a link to
                    reset your password
                  </p>
                </div>
              </div>
              <div
                className={`col-xs-12 col-sm-6 ${classes.dav__membership_form}`}
              >
                <form>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="filled"
                    name="email"
                    size="small"
                    className={classes.gpa__form_input_field}
                  />
                  <div className={classes.remembered_pass}>
                    <p>
                      Remembered Password? <Link to="/login">Login</Link>
                    </p>
                    <p>
                      New to Hervey Holdings?{" "}
                      <Link to="/register">Register</Link>
                    </p>
                  </div>

                  <Row>
                    <Col
                      sm={{ span: 8, offset: 2 }}
                      xs={{ span: 10, offset: 1 }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        type="submit"
                        className={classes.dav__membership_submit_button}
                      >
                        Send Link
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </Container>
  );
};

export default ResetPassword;
