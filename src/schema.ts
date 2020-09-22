import { buildSchemaSync } from "type-graphql";
// import { Container as container } from "typedi";
import { useContainer } from "typeorm/container";
import { TodoResolver } from "./features/todos/todo.resolver";

// useContainer(container);
export const schema = buildSchemaSync({
  resolvers: [TodoResolver],
  // container,
});
