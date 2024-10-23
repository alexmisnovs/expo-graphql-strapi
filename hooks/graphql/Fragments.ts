import { gql } from "@/__generated__";

export const ESSEMTIALS_ARTICLE_FRAGMENT = gql(`
   fragment Essentials on Article {
      title,
      slug,
      description
      publishedAt
 }
   `);
