import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import "./header.css";

import Logo from "../images/logo.svg";

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Box sx={{ flexGrow: 1 }}>
        <Link to="/">
          <img
            class="header-logo"
            src={Logo}
            width={200}
            alt="A Gatsby astronaut"
          />
        </Link>
      </Box>
      <Button component={Link} to="/team" variant="text" color="secondary">
        Team
      </Button>
      <Button component={Link} to="/events" variant="text" color="secondary">
        Events
      </Button>
      <Button component={Link} to="/projects" variant="text" color="secondary">
        Projects
      </Button>
      <Button component={Link} to="/join" variant="contained" disableElevation>
        Join Us
      </Button>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
