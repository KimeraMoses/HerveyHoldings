import React, { useEffect, useState } from "react";
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
import { Link,useNavigate } from "react-router-dom";
import { signup } from "../../../store/Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

const RegisterForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const isLoading = useSelector(state=>state.registration.isLoading);
  const message = useSelector(state=>state.registration.message);
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: event.target.value });
    setError("");
    if (name === "email") {
      setError("");
      if (values.email === "undefined") {
        setError("Email is required to register");
      }
      if (values.email !== "undefined") {
        setError("");
        let pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(value)) {
          setError("Please enter valid email address.");
        }
      }
    }
    setError("");
  };

  const RegisterFormSubmitHandler = async (e) => {
    e.preventDefault();

    if (values.username.length < 1) {
      return setError("Names Required");
    }
    if (values.username.length < 3) {
      return setError("Name too short");
    }

    if (values.email.length < 3) {
      return setError("A valid email is required to register");
    }
    if (values.email.length >0) {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(values.email)) {
      return setError("Please enter valid email address.");
    }
    }

    if (values.password.length < 6) {
      return setError("Password must be atleast 6 characters");
    }
    if (values.confirmPassword.length < 1) {
      return setError("Please confirm password");
    }
    if (values.password !== values.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await dispatch(
      signup(
        values.email,
        values.username,
        values.password,
      ));
      navigate('/login')
      // enqueueSnackbar("Account created Succesfully", {
        //   variant: "success",
      //   action,
      //   anchorOrigin: {
        //     vertical: "top",
      //     horizontal: "center",
      //   },
      //   TransitionComponent: Slide,
      // });
      
      setValues({ ...values, values: "" });
      setError('')
    } catch (error) {
      if (!navigator.onLine) {
        return setError("Please connect to the internet to register");
      }
      
    }
  };

  //====Handle password visibility====//
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

                  <h1>SIGN UP</h1>
                  <p>
                    Manage your tours at the comfort of your home by creating
                    your account with Dav Safaris Uganda
                  </p>
                </div>
              </div>
              <div
                className={`col-xs-12 col-sm-6 ${classes.dav__membership_form}`}
              >
                {(message || error) && (
                  <div className="d-flex mb-3 w-100">
                    <Alert severity="error" className={classes.dav__membership_form_error_wrapper}>
                      {error || message}
                    </Alert>
                  </div>
                )}
                <form onSubmit={RegisterFormSubmitHandler}>
                  <TextField
                    fullWidth
                    label="User Name"
                    variant="filled"
                    name="username"
                    type="text"
                    onChange={handleOnChange}
                    size="small"
                    className={classes.gpa__form_input_field}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="filled"
                    onChange={handleOnChange}
                    name="email"
                    // type="email"
                    size="small"
                    className={classes.gpa__form_input_field}
                  />
                  <FormControl
                    className={classes.gpa__form_input_field}
                    variant="filled"
                    size="small"
                    fullWidth
                  >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <FilledInput
                      type={values.showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleOnChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
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
                    <InputLabel htmlFor="password">Comfirm Password</InputLabel>
                    <FilledInput
                      type={values.showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      onChange={handleOnChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
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
                        {isLoading? "Creating account...": "Register"}
                      </Button>
                    </Col>
                  </Row>
                </form>
                <div className={classes.gpa__register_form_footer}>
                  Already have an account?
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

export default RegisterForm;
