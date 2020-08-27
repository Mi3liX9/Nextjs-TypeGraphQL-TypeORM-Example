import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchemaSync, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "hello";
  }
}

const schema = buildSchemaSync({ resolvers: [HelloResolver] });
const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
