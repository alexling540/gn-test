import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
      <AppBar position="sticky" color="default">
        <Toolbar variant="dense">
          <Grid
            container
            direction="row"
            alignItems="center"
            columnSpacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid item xs="auto">
              <Link to="/">
                <img
                  className="header-logo"
                  src={Logo}
                  height={24}
                  alt="A Gatsby astronaut"
                />
              </Link>
            </Grid>
            <Grid item xs></Grid>
            {links.map(({ to, text }, index) => (
              <Grid item key={index} xs="auto">
                <Button
                  component={Link}
                  to={to}
                  variant="text"
                  color="primary"
                  size="small"
                >
                  {text}
                </Button>
              </Grid>
            ))}
            <Grid item xs="auto">
              <Button
                component={Link}
                to="/join"
                variant="contained"
                disableElevation
                size="small"
              >
                Join Us
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ display: { md: "none" } }}
          >
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div">
                {siteTitle}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
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
