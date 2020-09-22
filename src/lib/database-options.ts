import { Todo } from "src/features/todos/todo.entitiy";
import { ConnectionOptions } from "typeorm";

export const options: ConnectionOptions = {
  type: "sqlite",
  database: `src/data/line.sqlite`,
  entities: [Todo],
  synchronize: true,
  logging: true,
};
