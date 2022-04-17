/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/**
 * Helper function to create pages based with given template
 * @param {function} createPage - The createPage funtion provided by Gatsby
 * @param {string} template - The name of the JavaScript file containing the template
 * @returns {(node) => void}
 */
const createPageFromMarkdown = (createPage, template) => {
  const templatePath = "./src/page-templates";

  return function (node) {
    const {
      id,
      fields: { slug },
    } = node;

    createPage({
      path: slug,
      component: path.resolve(`${templatePath}/${template}`),
      context: {
        id,
        slug,
      },
    });
  };
};

/*
 * Gets all events and projects using GraphQL, then creates pages using the templates
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allEvents: allMdx(filter: { fields: { collection: { eq: "events" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }

      allProjects: allMdx(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { data, errors } = result;

  if (errors) {
    errors.forEach((e) => console.error(e.toString()));
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const { allEvents, allProjects } = data;

  allEvents.edges.forEach(({ node }) =>
    createPageFromMarkdown(createPage, "event-page.js")(node)
  );

  allProjects.edges.forEach(({ node }) =>
    createPageFromMarkdown(createPage, "project-page.js")(node)
  );
};

/*
 * Customizations for GraphQL nodes created from markdown files
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField, createNodeId } = actions;

  if (node.internal.type === "Mdx") {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: "collection",
      value: collection,
    });
    createNodeField({
      node,
      name: "slug",
      value: `/${collection}${slug}`,
    });

    // For events, add a field depending on if the event has occured or hasn't occured yet
    if (collection === "events") {
      createNodeField({
        node,
        name: "isFuture",
        value: new Date(node.frontmatter.eventDate) > new Date(),
      });
    }
  }
};

/*
 * Defines custom GraphQL schema to bypass schema inference
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type PersonName {
      first: String!
      last: String!
    }

    type Frontmatter {
      eventName: String!
      eventLocation: String!
      eventDescription: String!
      eventDate: Date!
      eventBanner: String
      personGitHub: String
      personIntro: String
      personName: PersonName!
      personLinkedIn: String
      personPersonalWebsite: String
      personPicture: String
      personRole: String!
      projectBanner: String
      projectDescription: String
      projectIsActive: Boolean!
      projectName: String!
      projectTeam: [Mdx] @link(by: "slug")
    }

    type Fields {
      collection: String
      isFuture: Boolean
      slug: String
    }
  `);
};
