import { graphql } from "gatsby";

const memberMarkdownFrontmatterFragment = graphql`
  fragment MemberMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      firstName
      lastName
      picture
      role
      intro
      gitHub
      linkedIn
      personalWebsite
    }
  }
`;

export { memberMarkdownFrontmatterFragment };
