import { gql } from '@apollo/client';

export const GET_COUNTRY = gql(/* GraphQL */ `
  query Query($code: ID!) {
    country(code: $code) {
      name
      emoji
      native
      capital
    }
  }
`);

export const GET_REPOSITORY = gql(/* GraphQL */ `
  query RepositoryQuery($repository: String!, $owner: String!) {
    repository {
      id
      name
      description
      stargazerCount
    }
  }
`);
