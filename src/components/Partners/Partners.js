import React from "react";
import { Link } from "react-router-dom";
import classes from "./Partners.module.css";
import NaturalRes from "../../assets/NaturalRes.jpg";
import NAADs from "../../assets/NAADs.png";
import KCCA from "../../assets/KCCA.png";
import OWC from "../../assets/OWC.png";
import Muk from "../../assets/Muk.png";
import BoU from "../../assets/BoU.png";
import Bajaj from "../../assets/bajaj-process.png";
import StanBic from "../../assets/StanBic.jpg";
import gwic from "../../assets/preef.png";
import MWERU from "../../assets/MWERU.jpg";
import Geophysical from "../../assets/Geophysical.png";
import Estavros from "../../assets/Estavros.png";
import Divider from "../UI/Divider/Divider";



const Partners = () => {
  const Partner = (props) => {
    return (
      <Link to="/partners" className={classes.hervey__partner}>
        <img src={props.src} alt={props.alt} />
      </Link>
    );
  };
  return (
    <div className={classes.dav__partners_wrapper}>
      <Divider/>
      <h4>Our Partners</h4>
      <div className={classes.dav__partners_wrapper_inner}>
        <Partner src={NaturalRes} alt="Natural Resources" />
        <Partner src={StanBic} alt="Stanbic Bank" />
        <Partner src={Estavros} alt="Estavros" />
        <Partner src={NAADs} alt="NAADs" />
        <Partner src={KCCA} alt="KCCA" />
        <Partner src={Bajaj} alt="Bajaj" />
        <Partner src={BoU} alt="BoU" />
        <Partner src={Muk} alt="Makerere University" />
        <Partner src={MWERU} alt="MWERU" />
        <Partner src={gwic} alt="gwic" />
        <Partner src={Geophysical} alt="Geophysical" />
        <Partner src={OWC} alt="Operation Wealth Creation" />
      </div>
    </div>
  );
};

export default Partners;
