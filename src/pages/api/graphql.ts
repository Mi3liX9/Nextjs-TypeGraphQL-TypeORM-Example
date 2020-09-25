import { NextApiRequest, NextApiResponse } from "next";
import { options } from "src/lib/database-options";
import { getApolloServerHandler } from "src/lib/type-graphql";
import { connectDatabase } from "src/lib/typeORM";

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
