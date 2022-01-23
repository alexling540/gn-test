import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/layout/layout";

const EventPageTemplate = ({ name, date, description, image }) => {
  return (
    <React.Fragment>
      <Box
        style={{
          background: image
            ? `linear-gradient(90deg, rgb(255, 255, 255) 0%, transparent 25%, transparent 75%, rgb(255, 255, 255) 100%), url(${image})`
            : "lightgrey",
        }}
        sx={{
          backgroundSize: "auto, cover",
          backgroundPosition: "0 0, center",
          padding: { xs: "3em 16px", sm: "3em 24px" },
          margin: { xs: "0 -16px", sm: "0 -24px" },
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <div>{date}</div>
      </Box>

      <Typography variant="body">{description}</Typography>
    </React.Fragment>
  );
};

const EventPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;
  const { name, date, description, image } = frontmatter;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/events" underline="hover" color="inherit">
          Events
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <EventPageTemplate
        name={name}
        // content={post.html}
        // contentComponent={HTMLContent}
        date={date}
        description={description}
        image={image}
        // helmet={
        //   <Helmet titleTemplate="%s | Blog">
        //     <title>{`${post.frontmatter.title}`}</title>
        //     <meta
        //       name="description"
        //       content={`${post.frontmatter.description}`}
        //     />
        //   </Helmet>
        // }
        // tags={post.frontmatter.tags}
        // title={post.frontmatter.title}
      />
    </Layout>
  );
};

const eventPageQuery = graphql`
  query EventPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        description
        image
        name
        title
      }
    }
  }
`;

export default EventPage;
export { EventPageTemplate, eventPageQuery };
