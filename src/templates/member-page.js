import { graphql } from "gatsby";

const memberMarkdownFrontmatterFragment = graphql`
  fragment MemberMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      firstName
      lastName
      role
      intro
      gitHub
      linkedIn
      personalWebsite
    }
  }
`;

export { memberMarkdownFrontmatterFragment };
