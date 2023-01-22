import { ApolloServer } from "apollo-server";
import { loadGraphQLSchema } from "src/graphql/schema";

const schema = loadGraphQLSchema();
new ApolloServer({ schema, persistedQueries: false })
  .listen({ port: 9000 })
  .then(({ server, url }) => {
    // This must be higher than the idle timeout value set on the load balancer, otherwise
    // we may see intermittent 502 errors from the load balancer
    server.keepAliveTimeout = 65 * 1000; // in milliseconds

    console.log(`🚀 Server ready at ${url}`);
  });
