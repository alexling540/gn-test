import { graphql } from "gatsby";

const eventMarkdownFrontmatterFragment = graphql`
  fragment EventMarkdownFrontmatterFragment on Mdx {
    frontmatter {
      name: eventName
      date: eventDate
      banner: eventBanner
      description: eventDescription
      location: eventLocation
    }
  }
`;

const personMarkdownFrontmatterFragment = graphql`
  fragment PersonMarkdownFrontmatterFragment on Mdx {
    frontmatter {
      name: personName {
        first
        last
      }
      picture: personPicture
      role: personRole
      intro: personIntro
      gitHub: personGitHub
      linkedIn: personLinkedIn
      personalWebsite: personPersonalWebsite
    }
  }
`;

const projectMarkdownFrontmatterFragment = graphql`
  fragment ProjectMarkdownFrontmatterFragment on Mdx {
    frontmatter {
      name: projectName
      banner: projectBanner
      description: projectDescription
    }
  }
`;

export {
  eventMarkdownFrontmatterFragment,
  personMarkdownFrontmatterFragment,
  projectMarkdownFrontmatterFragment,
};
