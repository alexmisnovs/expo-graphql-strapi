import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://192.168.1.163:1337/graphql`,
  documents: ["./**/*.{ts,tsx,graphql}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
