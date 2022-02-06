import React, { useEffect } from "react";
import imageCover from "../../assets/About-Us.jpg";
import classes from "./Terms.module.css";

const Policies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.dav__policies_wrapper}>
      <div
        className={classes.dav__policies_hero}
        style={{
          backgroundImage: `url(${imageCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1>Privacy Policies</h1>
      </div>
      <div className={classes.dav__policies}>
       
        <ul>
          <li>
            When you visit our website or use our mobile and/or tablet apps, to
            give you the best possible experience, based on what you want to
            find out and which device you’re using.
          </li>
          <li>
            So we can contact you successfully, if you get in touch or ask us
            for information.
          </li>
         
        </ul>
       
        <h4>How we share your personal information</h4>
        <p>
          We’ll only either ask you for personal information directly or, with
          your permission, gather it by tracking how you use our website or our
          mobile and/or tablet apps. We won’t share your personal information
          with third parties for any marketing activities.
        </p>
        <p>
          When we do share your personal information, it’s always so we can
          provide you with a better service when you’re dealing with us.
        </p>

        <h4>Safeguarding your personal information</h4>
        <p>
          We keep your personal information securely, and we only keep it for
          limited and appropriate amounts of time. If you’d like to stop
          receiving our email marketing, you can click ‘unsubscribe’ at any
          time.
        </p>
        <h4>Your rights to your personal information</h4>
        <p>
          You can contact us at any time if you have questions, concerns,
          comments, requests or complaints regarding our privacy policy or your
          personal information. Please email us at{" "}
          <a href="mailto:info@herveyholdings.com">info@herveyholdings.com</a>
        </p>
        <p>
          If you have any comments regarding this privacy policy or the way we
          handle your personal information, you can also contact us.
        </p>

        <h4>Changes to our privacy policy</h4>
        <p>
          From time to time, we might review our privacy policy and make changes
          to it. If we do this, we’ll always highlight it on our website and,
          where appropriate, let you know by email.
        </p>
      </div>
    </div>
  );
};

export default Policies;
