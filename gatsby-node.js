/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const createPageFromMarkdown = (createPage, template) => {
  const templatePath = "src/templates";

  return function (edge) {
    const {
      node: {
        id,
        fields: { slug },
      },
    } = edge;

    createPage({
      path: slug,
      component: path.resolve(`${templatePath}/${template}`),
      context: {
        id,
      },
    });
  };
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allEvents: allMarkdownRemark(
        filter: { fields: { collection: { eq: "events" } } }
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

      allProjects: allMarkdownRemark(
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
  `).then(({ data, errors }) => {
    if (errors) {
      errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(errors);
    }

    const { allEvents, allProjects } = data;

    allEvents.edges.forEach((edge) =>
      createPageFromMarkdown(createPage, "event-page.js")(edge)
    );

    allProjects.edges.forEach((edge) =>
      createPageFromMarkdown(createPage, "project-page.js")(edge)
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: "pages" });

    createNodeField({
      node,
      name: "collection",
      value: collection,
    });
    createNodeField({
      node,
      name: "isFuture",
      value: new Date(node.frontmatter.date) > new Date(),
    });
    createNodeField({
      node,
      name: "slug",
      value: `/${collection}${slug}`,
    });
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
