import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Button } from "gatsby-theme-material-ui";

import {
  Event as EventIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  AccountTree as ProjectIcon,
} from "@mui/icons-material";
import Logo from "../../images/logo.svg";

import "./header.css";

const Header = ({ id, window, siteTitle }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const links = [
    { to: "/team", text: "Team", icon: <PeopleIcon /> },
    { to: "/events", text: "Events", icon: <EventIcon /> },
    { to: "/projects", text: "Projects", icon: <ProjectIcon /> },
  ];

  return (
    <React.Fragment>
      <AppBar id={id} position="sticky" color="default">
        <Toolbar variant="dense">
          <Grid
            container
            direction="row"
            alignItems="center"
            columnSpacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid
              item
              xs="auto"
              // sx={{ display: "flex", alignItems: "center" }}
            >
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
                <Button component={Link} to={to} variant="text" color="primary">
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
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {links.map(({ to, text, icon }, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton component={Link} to={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          component={Link}
          to="/join"
          variant="contained"
          disableElevation
          sx={{
            margin: "0 10px",
          }}
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
