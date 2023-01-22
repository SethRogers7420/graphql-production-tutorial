import { GraphQLSchema } from "graphql";
import { addResolversToSchema } from "@graphql-tools/schema";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "path";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

export const baseResolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

export const resolvers = {
  Query: baseResolvers.Query,
};

export function loadGraphQLSchema(): GraphQLSchema {
  // Load the schema from our GraphQL files. Excluded the generated schema.graphql file.
  const graphqlTypes = loadSchemaSync(
    [
      join(__dirname, "./resolvers/**/*.graphql"),
      join(__dirname, "./baseTypeDefs.graphql"),
    ],
    {
      loaders: [new GraphQLFileLoader()],
    }
  );

  return addResolversToSchema({
    schema: graphqlTypes,
    resolvers,
  });
}
