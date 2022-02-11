import { graphql } from "gatsby";

const personMarkdownFrontmatterFragment = graphql`
  fragment PersonMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      personName: name {
        first
        last
      }
      personPicture: picture
      personRole: role
      personIntro: intro
      personGitHub: gitHub
      personLinkedIn: linkedIn
      personPersonalWebsite: personalWebsite
    }
  }
`;

export { personMarkdownFrontmatterFragment };
