import { ApolloServer } from "apollo-server";
import { loadGraphQLSchema } from "src/graphql/schema";

// Load the schema from our .graphql files.
const schema = loadGraphQLSchema();

new ApolloServer({ schema, persistedQueries: false })
  .listen({ port: 8000 })
  .then(({ server, url }) => {
    // This is a workaround for problems with an application load balancer in AWS where intermittent 502 errors from NGINX are returned.
    //
    // This must be higher than the idle timeout value set on the load balancer which defaults to 60 seconds.
    server.keepAliveTimeout = 65 * 1000; // in milliseconds

    console.log(`🚀 Server ready at ${url}`);
  });
