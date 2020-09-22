import { buildSchemaSync } from "type-graphql";
import { TodoResolver } from "../features/todos/todo.resolver";

export const schema = buildSchemaSync({
  resolvers: [TodoResolver],
});
