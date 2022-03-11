import React from "react";
import image from "../../assets/user.png";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import classes from  "./TestimonialCard.module.css";

const TestimonialCard = () => {
  return (
    <div className={classes.testimonial__item_card}>
      <div className={classes.testimonial__item}>
        <div className={`${classes.testimony_wrap} py-4`}>
          <div className={`${classes.icon} d-flex align-items-center justify-content-center`}>
            <FormatQuoteIcon/>
          </div>
          <div className={classes.testimony_content}>
            <p className="mb-4">
              You guys rocked on the KCCA kyanja yard project. Thanks so much for doing a great job!
            </p>
            <div className="d-flex align-items-center">
              <div
                className={classes.user_img}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
              ></div>
              <div className={`${classes.user__details} pl-3`}>
                <p className={classes.user_name}>Ssebalamu Bashir</p>
                <span className={classes.user_position}>Projects Coordinator, KCCA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
