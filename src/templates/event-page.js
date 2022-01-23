import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Typography from "@mui/material/Typography";

import Layout from "../components/layout/layout";

const EventPageTemplate = ({ name, date, description, image }) => {
  return (
    <React.Fragment>
      <div
        style={{
          background: image
            ? `linear-gradient(90deg, rgb(255, 255, 255) 0%, transparent 25%, transparent 75%, rgb(255, 255, 255) 100%), url(${image})`
            : "lightgrey",
        }}
      >
        <Typography variant="h1">{name}</Typography>
        <div>{date}</div>
      </div>

      <Typography variant="body">{description}</Typography>
    </React.Fragment>
  );
};

const EventPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <EventPageTemplate
        name={frontmatter.name}
        // content={post.html}
        // contentComponent={HTMLContent}
        date={frontmatter.date}
        description={frontmatter.description}
        image={frontmatter.image}
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
