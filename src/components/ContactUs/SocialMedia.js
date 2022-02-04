import React from "react";
import { useSelector } from "react-redux";
import { Fb } from "../../containers/Icons/Icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import classes from "./SocialMedia.module.css";

export const SocialIcon = (props) => {
  return (
    <a href={props.socialLink} target="_blank" rel="noreferrer" className={classes.dav__social_icon_link}>
      {props.socialIcon}
    </a>
  );
};

const SocialMedia = () => {

  return (
    <div className={classes.dav__social_icons_wrapper}>
      <SocialIcon socialLink="https://www.instagram.com/" socialIcon={<InstagramIcon  />} />
      <SocialIcon socialLink="https://ug.linkedin.com/" socialIcon={<LinkedInIcon  />} />
      <SocialIcon socialLink="https://www.facebook.com/" socialIcon={<Fb />} />
      <SocialIcon socialLink="https://wa.link/7j8eyz" socialIcon={<WhatsAppIcon  />} />
      <SocialIcon socialLink="https://mobile.twitter.com/" socialIcon={<TwitterIcon  />} />
    </div>
  );
};
export default SocialMedia;
