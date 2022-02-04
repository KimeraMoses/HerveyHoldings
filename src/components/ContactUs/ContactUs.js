import classes from "./ContactUs.module.css";
import React, { useEffect, useState } from "react";
import Image from "../../assets/About-Us.jpg";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, Paper, TextField } from "@material-ui/core";
import ContactUsForm from "./ContactUsForm";
import { EmailOutlined } from "@material-ui/icons";
import SocialMedia from "./SocialMedia";
import { Form } from "react-bootstrap";
import NewsLetterForm from "./NewsLetterForm";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isLoading = useSelector((state) => state.message.subcribing);
  const message = useSelector((state) => state.message.message);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    setError("")
  };
  const NewsLetterFormSubmit = async (e) => {
    e.preventDefault();
    if (email.length < 1) {
      return setError("Email required");
    }

    if (email !== "undefined") {
      setError("");
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        setError("Please enter valid email address.");
      }
    }

    try {
      setError('')
      // await dispatch(NewsLetters(email));

      setEmail("");
    } catch {
      return setError("Failed to subscribe to the newsletter");
    }
  };

  return (
    <div className={classes.dav__contact_us_page_wrapper}>
      <div
        className={classes.dav__contact_us_hero}
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1>Contact Us</h1>
      </div>


      <div className={classes.dav__contact_us_form_wrapper}>
        <Paper className={classes.dav__contact_us_form}>
          <div className={classes.dav__contact_us_form_inner}>
            <ContactUsForm />
          </div>
          <div className={classes.dav__address_details}>
            <div className={classes.dav__address}>
              <div className={classes.dav__address_title}>
                <RoomIcon />
                <h5>Our Address</h5>
              </div>
              <div className={classes.dav__address_content}>
                <p>
                  Freedom City Shopping Mall
                  <br /> Entebbe Road, Uganda
                </p>
              </div>
            </div>
            <div className={classes.dav__phone_contacts}>
              <div className={classes.dav__phone_contacts_title}>
                <PhoneIcon />
                <h5>Our Contacts</h5>
              </div>
              <div className={classes.dav__phone_contacts_content}>
                <ul>
                  <li>
                    Phone: <a href="https://wa.link/0v0s1w">+256757795781</a>
                  </li>
                  <li>
                    WhatsApp: <a href="https://wa.link/barf5j">+256701412430</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.dav__phone_contacts}>
              <div className={classes.dav__phone_contacts_title}>
                <EmailOutlined />
                <h5>Our Email Address</h5>
              </div>
              <div className={classes.dav__phone_contacts_content}>
                <ul>
                  <li>
                    <a href="mailto:info@davsafaris.com">info@davsafaris.com</a>
                  </li>
                  <li>
                    <a href="mailto:davsafaris@gmail.com">
                      davsafaris@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Paper>
        <div className={classes.dav__connect_wrapper}>
          <Paper className={classes.dav__contact_details}>
            <h5>Our Social Media Links</h5>
            <div className={classes.dav__social_media_btn_wrapper}>
              <SocialMedia />
            </div>
          </Paper>
          <Paper className={classes.dav__newsletter_wrapper}>
            <h5>Subscribe to our Newsletters</h5>
            <div className={classes.dav__newsletter_form_wrapper}>
              {message && (
                <Alert style={{marginBottom: 5}} severity={message === "success" ? "success" : "error"}>
                  {message === "success"
                    ? "You have successfully subscribed to our Newsletter"
                    : message}
                </Alert>
              )}

              {error && <Alert style={{marginBottom: 5}} severity="error">{error}</Alert>}
              <Form onSubmit={NewsLetterFormSubmit} style={{marginTop: 10}}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={classes.dav__subscribe_form_field}
                />
                <Button variant="outlined" color="primary" type="submit">
                  {isLoading? "Subscribing...": "Subscribe"}
                </Button>
              </Form>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
