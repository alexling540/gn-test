import { graphql } from "gatsby";

const memberMarkdownFrontmatterFragment = graphql`
  fragment MemberMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      name {
        first
        last
      }
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
