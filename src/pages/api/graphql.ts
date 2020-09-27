import { NextApiRequest, NextApiResponse } from "next";
import { getApolloServerHandler } from "src/lib/type-graphql";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
