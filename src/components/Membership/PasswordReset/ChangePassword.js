import React, { useState } from "react";
import classes from "../Membership.module.css";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../AppBar/Logo";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [password, showPassword] = useState(false);

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
                  <Logo />

                  <h1>RESET PASSWORD</h1>
                  <p>Enter your new prefered password and corfirm it</p>
                </div>
              </div>
              <div
                className={`col-xs-12 col-sm-6 ${classes.dav__membership_form}`}
              >
                <form>
          
                  <FormControl
                    className={classes.gpa__form_input_field}
                    variant="filled"
                    size="small"
                    fullWidth
                  >
                    <InputLabel htmlFor="password">New Password</InputLabel>
                    <FilledInput
                      type={password ? "text" : "password"}
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => showPassword(!password)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {password ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl
                    className={classes.gpa__form_input_field}
                    variant="filled"
                    size="small"
                    fullWidth
                  >
                    <InputLabel htmlFor="password">Comfirm New Password</InputLabel>
                    <FilledInput
                      type={password ? "text" : "password"}
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => showPassword(!password)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {password ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
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
                        Reset Password
                      </Button>
                    </Col>
                  </Row>
                </form>
                <div className={classes.gpa__register_form_footer}>
                  Remembered password?
                  <span style={{ marginLeft: 5 }}>
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </Container>
  );
};

export default ChangePassword;
