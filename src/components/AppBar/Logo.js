import React from "react";
import { Link } from 'react-router-dom'

//==COMPONENT IMPORTS===
import Logo from "../../assets/Hervey-Holdings-Logo.png"
import classes from "./Logo.module.css";

const DavLogo = (props) => {
  const { setMenuOpen} = props
  return (
    <Link to="/" onClick={()=>setMenuOpen(false)} className={classes.logo_wrapper}>
      <img className={classes.logo} src={Logo} alt="Hervey Holdings Ltd" />
      <h2>HERVEY <br/> HOLDINGS</h2>
    </Link>
  );
};
export default DavLogo;
