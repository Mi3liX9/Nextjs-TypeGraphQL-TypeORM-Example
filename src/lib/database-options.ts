import { Todo } from "src/features/todos/todo.entitiy";
import { ConnectionOptions } from "typeorm";

export const options: ConnectionOptions = {
  type: "sqlite",
  database: `src/database/database.sqlite`,
  entities: [Todo],
  synchronize: true,
};
