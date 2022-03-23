import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from "react-router-dom";
import mainLogo from "../../assets/logo.png";


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const LinkStyle = {
  padding: "1rem",
  textDecoration: "none",
  justifyContent: "center"
}

const navStyle = {
  margin: "auto",
}

const appBar = {
  marginBottom: "2vw",
}


export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}> 
        <div style={appBar}>
          <AppBar>
            <Toolbar>
              <img src={mainLogo} alt="logo Nodazon" />
              <div style={navStyle}>
                <Link to="/" style={LinkStyle}>Accueil</Link>
                <Link to="/products" style={LinkStyle}>Nos produits</Link>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
