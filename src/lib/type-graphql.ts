import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/lib/schema";

let apolloServerHandler: (req: any, res: any) => Promise<void>;

export const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};
