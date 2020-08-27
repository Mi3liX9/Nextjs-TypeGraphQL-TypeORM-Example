import { buildSchemaSync } from "type-graphql";
import HelloResolver from "./resolvers/hello.resolver";

export const schema = buildSchemaSync({
  resolvers: [HelloResolver],
});
