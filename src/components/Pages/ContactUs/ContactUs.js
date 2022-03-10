import classes from "./ContactUs.module.css";
import React, { useEffect, useState } from "react";
import Image from "../../../assets/hervey-location.png";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, Paper, TextField } from "@material-ui/core";
import ContactUsForm from "./ContactUsForm";
import { EmailOutlined } from "@material-ui/icons";
import SocialMedia from "./SocialMedia";
import { Form } from "react-bootstrap";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const NewsLetterFormSubmit = async (e) => {
    e.preventDefault();
    // if (email.length < 1) {
    //   return setError("Email required");
    // }

    // if (email !== "undefined") {
    //   setError("");
    //   let pattern = new RegExp(
    //     /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    //   );
    //   if (!pattern.test(email)) {
    //     setError("Please enter valid email address.");
    //   }
    // }

    // try {

    //   setEmail("");
    // } catch {
    //   return setError("Failed to subscribe to the newsletter");
    // }
  };

  return (
    <div className={classes.dav__contact_us_page_wrapper}>
      <div
        className={classes.dav__contact_us_hero}
        style={{
          backgroundImage: `url(${Image})`,
          // backgroundSize: "cover",
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
                <p>Plot 2, 8th St, City Star Building, Industrial Area.</p>
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
                    Phone: <a href="https://wa.link/7j8eyz">+256778600932</a>
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
                    <a href="mailto:info@herveyholdings.com">info@herveyholdings.com</a>
                  </li>
                  <li>
                    <a href="mailto:herveyholdings11@gmail.com">
                      herveyholdings11@gmail.com
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
              <Form onSubmit={NewsLetterFormSubmit} style={{ marginTop: 10 }}>
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
                  {"Subscribe"}
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
