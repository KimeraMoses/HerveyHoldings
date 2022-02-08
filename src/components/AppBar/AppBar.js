import React, { useState } from "react";

//===MUI IMPORTS===
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Hidden, IconButton, Button, Avatar } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


//===COMPONENT IMPORTS===
import classes from "./AppBar.module.css";
import Logo from "./Logo";
import NavigationMenu from "../Navigation/NavigationMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Toolbar id="dav__back_to_top_anchor">
        <div className={classes.dav__AppBar_wrapper}>
          <div className={classes.dav__AppBar_logo_Wrapper}>
            <Logo setMenuOpen={setMenuOpen} />
          </div>

          <div className={classes.dav__AppBar_spacer} />

          <Hidden xsDown>
            <div className={classes.dav__action_btn_wrapper}>
              <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </Hidden>

          <Hidden smUp>
            <div className={classes.mobile_header_menu}>
              <IconButton
                size="large"
                onClick={() => setMenuOpen(!menuOpen)}
                className={classes.menu_btn_toggle}
              >
                {menuOpen ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </IconButton>
            </div>
          </Hidden>
        </div>
      </Toolbar>
      <Hidden smUp>
        <div className={classes.navbar_mobile_menu}>
          <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Hidden>
    </>
  );
};
export default AppBar;