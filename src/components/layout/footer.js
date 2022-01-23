import React from "react";
import { Link } from "gatsby";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import DscLogo from "../../images/logo.svg";
// import EmailIcon from "../images/icon_email.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./footer.css";

const Footer = () => {
  const footerIcons = [
    { icon: FacebookIcon, link: "https://www.facebook.com/dsc.tamu/" },
    { icon: InstagramIcon, link: "https://www.instagram.com/dsc.tamu" },
    {
      icon: LinkedInIcon,
      link: "https://linkedin.com/company/developer-student-club-tamu",
    },
    { icon: TwitterIcon, link: "https://twitter.com/DSCTAMU" },
  ];

  return (
    <footer id="footer">
      <Grid
        container
        direction="column"
        rowSpacing={3}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <img id="footer-logo" src={DscLogo} height={50} />
        </Grid>
        <Grid
          container
          item
          columnSpacing={5}
          alignItems="center"
          justifyContent="center"
        >
          {footerIcons.map(({ icon: Icon, link }, idx) => (
            <Grid item key={idx}>
              <IconButton component={Link} to={link} size="large">
                <Icon htmlColor="white" />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
