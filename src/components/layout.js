/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Header from "./header";
import "./layout.css";

import Icon from "../images/logo.svg";
import EmailIcon from "../images/icon_email.svg";
import FacebookIcon from "../images/icon_facebook.svg";
import InstagramIcon from "../images/icon_instagram.svg";
import LinkedInIcon from "../images/icon_linkedin.svg";
import TwitterIcon from "../images/icon_twitter.svg";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const footerIcons = [
    { src: EmailIcon, link: "" },
    { src: FacebookIcon, link: "https://www.facebook.com/dsc.tamu/" },
    { src: InstagramIcon, link: "https://www.instagram.com/dsc.tamu" },
    {
      src: LinkedInIcon,
      link: "https://linkedin.com/company/developer-student-club-tamu",
    },
    { src: TwitterIcon, link: "https://twitter.com/DSCTAMU" },
  ];

  return (
    <>
      <Header
        siteTitle={
          data.site.siteMetadata?.title || `Developer Student Club @ TAMU`
        }
      />
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <footer
        style={{
          marginTop: `2rem`,
          background: "black",
        }}
      >
        <img src={Icon} height={50} />
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {footerIcons.map((icon, idx) => (
            <Grid item key={idx}>
              <Link to={icon.link}>
                <img src={icon.src} height={40} width={40} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
