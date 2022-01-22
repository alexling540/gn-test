import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Typography from "@mui/material/Typography";

import Layout from "../components/layout";

const EventPageTemplate = ({ name, date, description, image }) => {
  return (
    <>
      <div
        style={{
          background: image ? `url(${image})` : "lightgrey",
        }}
      >
        <Typography variant="h1">{name}</Typography>
        <div>{date}</div>
      </div>

      <Typography variant="body">{description}</Typography>
    </>
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
        // description={post.frontmatter.description}
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
