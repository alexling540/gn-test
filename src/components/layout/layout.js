/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "@mui/material";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

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

  return (
    <div id="layout">
      <Header
        siteTitle={
          data.site.siteMetadata?.title || `Developer Student Club @ TAMU`
        }
        id="header"
      />
      <Container id="main" maxWidth="xl" component="main">
        {children}
      </Container>
      <Footer id="footer" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
