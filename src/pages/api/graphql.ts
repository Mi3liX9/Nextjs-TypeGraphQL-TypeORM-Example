import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { getApolloServerHandler } from "src/lib/type-graphql";
import { connectDatabase } from "src/lib/typeORM";
import { ConnectionOptions } from "typeorm";
import { Todo } from "src/features/todos/todo.entitiy";

const options: ConnectionOptions = {
  url:
    "mongodb+srv://mighty:mighty@haladb.b5jdt.mongodb.net/test?retryWrites=true&w=majority",
  type: "mongodb",
  entities: [Todo],
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDatabase(options);
  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
