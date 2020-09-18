import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { getMongoRepository } from "typeorm";
import { Todo } from "./todo.entitiy";
import { TodoService } from "./todo.service";

@Service()
@Resolver()
export class TodoResolver {
  // constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { nullable: true })
  async todoList() {
    const todos = await getMongoRepository(Todo).find();
    return todos;
  }
}
