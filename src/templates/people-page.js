import { graphql } from "gatsby";

const peopleMarkdownFrontmatterFragment = graphql`
  fragment PeopleMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      personName: name {
        first
        last
      }
      personPicture: picture
      role
      intro
      gitHub
      linkedIn
      personalWebsite
    }
  }
`;

export { peopleMarkdownFrontmatterFragment };
