import { graphql } from "gatsby";

const personMarkdownFrontmatterFragment = graphql`
  fragment PersonMarkdownFrontmatterFragment on MarkdownRemark {
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

export { personMarkdownFrontmatterFragment };
