import { graphql } from 'msw';

const users = [
  { name: '조기문', age: 28, position: 'FE' },
  { name: '정우병', age: 29, position: 'FE' },
];

export const exampleHandlers = [
  graphql.query('RepositoryQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        repository: {
          id: 'MDEwOlJlcG9zaXRvcnkzMzU0MTc5Mjc=',
          stargazerCount: 1,
          name: 'next-graphql-msw-example',
          description: 'A example of using MSW to mock GraphQL API in a NextJS app',
        },
      }),
    );
  }),

  graphql.query('getUsers', (req, res, ctx) => {
    if (isErrorGeneratedRandomly) {
      return res(
        ctx.errors([
          {
            message: 'Error',
            errorType: 'TempError',
          },
        ]),
      );
    }

    return res(
      ctx.data({
        users,
      }),
    );
  }),
];

const isErrorGeneratedRandomly = (() => {
  const array = new Uint32Array(10);
  const randomValue = self.crypto.getRandomValues(array)[0];

  return randomValue < 10;
})();
