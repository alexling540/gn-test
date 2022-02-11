/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

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

    if (collection === "events") {
      createNodeField({
        node,
        name: "isFuture",
        value: new Date(node.frontmatter.eventDate) > new Date(),
      });
    }
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~images": path.resolve(__dirname, "src/images"),
        "~templates": path.resolve(__dirname, "src/templates"),
      },
    },
  });
};
