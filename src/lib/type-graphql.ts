import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";
import { options } from "./database-options";
import { connectDatabase } from "./typeORM";

let apolloServerHandler: (req: any, res: any) => Promise<void>;

export const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
      context: async () => await connectDatabase(options),
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};
