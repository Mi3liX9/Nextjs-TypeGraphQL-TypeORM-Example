import { buildSchemaSync } from "type-graphql";
import { Container as container } from "typedi";
import { TodoResolver } from "./features/todos/todo.resolver";

export const schema = buildSchemaSync({
  resolvers: [TodoResolver],
  container,
});
