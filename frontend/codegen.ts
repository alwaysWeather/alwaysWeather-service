import { CodegenConfig } from '@graphql-codegen/cli';

const GRAPHQL_API = 'https://countries.trevorblades.com/graphql';

const config: CodegenConfig = {
  schema: GRAPHQL_API,
  documents: ['./**/*.tsx'], // default: src/**/*.tsx
  generates: {
    './graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
