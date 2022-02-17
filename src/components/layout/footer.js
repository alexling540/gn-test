import React from "react";
import { Box, Grid } from "@mui/material";

import DscLogo from "../../images/logo.svg";
// import EmailIcon from "../images/icon_email.svg";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";

const Footer = ({ id }) => {
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
    <Box
      id={id}
      component="footer"
      sx={{ marginTop: "3rem", background: "black", padding: "3em" }}
    >
      <Grid
        container
        direction="column"
        rowSpacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <img src={DscLogo} height={40} />
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
              <a href={link}>
                <Icon
                  htmlColor="white"
                  fontSize="large"
                  style={{ verticalAlign: "middle" }}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
