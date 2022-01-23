import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import { Button } from "gatsby-theme-material-ui";

import MenuIcon from "@mui/icons-material/Menu";

import "./header.css";

import Logo from "../../images/logo.svg";

const Header = ({ window, siteTitle }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const links = [
    { to: "/team", text: "Team" },
    { to: "/events", text: "Events" },
    { to: "/projects", text: "Projects" },
  ];

  return (
    <React.Fragment>
      <AppBar position="sticky">
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map(({ to, text }, index) => (
              <Button
                component={Link}
                to={to}
                variant="text"
                color="secondary"
                key={index}
              >
                {text}
              </Button>
            ))}
            <Button
              component={Link}
              to="/join"
              variant="contained"
              disableElevation
            >
              Join Us
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 200 },
        }}
      >
        <Toolbar variant="dense" />
        <Divider />
        <List>
          {links.map(({ to, text }, index) => (
            <ListItem button component={Link} to={to} key={index}>
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Button
          component={Link}
          to="/join"
          variant="contained"
          disableElevation
        >
          Join Us
        </Button>
      </Drawer>
    </React.Fragment>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
