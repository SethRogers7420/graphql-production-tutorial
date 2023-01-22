import { ApolloServer } from "apollo-server";
import { loadGraphQLSchema } from "./graphql/schema";

// Load the schema from our .graphql files.
const schema = loadGraphQLSchema();

// Create Apollo Server running on port 8000.
//
// persistedQueries: false turns off a console warning that Apollo Server gives by default, see their docs here:
// https://www.apollographql.com/docs/apollo-server/performance/apq/
new ApolloServer({ schema, persistedQueries: false })
  .listen({ port: 8000 })
  .then(({ server, url }) => {
    // This is a workaround for problems with an application load balancer in AWS where intermittent 502 errors from NGINX are returned.
    //
    // This must be higher than the idle timeout value set on the load balancer which defaults to 60 seconds.
    server.keepAliveTimeout = 65 * 1000; // in milliseconds

    console.log(`🚀 Server ready at ${url}`);
  });
