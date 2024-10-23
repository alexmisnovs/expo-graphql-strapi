import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/";

export const GET_ARTICLES = gql(`
   query GetAllArticles {
      articles {
        ...Essentials
         cover {
          url
         }
         author {
          name
   
         }
      }
   }
`);
export const useArticles = () => {
  return useQuery(GET_ARTICLES, {
    context: {
      headers: {
        authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
      }
    }
  });
};

export const GET_ARTICLE_BY_ID = gql(`
  query GetArticleByDocumentId($documentId: ID!) {
  article(documentId: $documentId) {
     title
     ...Essentials
         cover {
          url
         }
         author {
          name
         }
  }
}
`);

export const useArticleByDocumentId = (documentId: string) => {
  return useQuery(GET_ARTICLE_BY_ID, {
    variables: { documentId },
    context: {
      headers: {
        authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
      }
    }
  });
};
