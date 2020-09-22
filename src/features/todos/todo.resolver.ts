import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { Todo } from "./todo.entitiy";
import { TodoService } from "./todo.service";

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService = new TodoService()) {}

  @Query(() => [Todo], { nullable: true })
  async todoList() {
    const todos = await this.todoService.getAll();
    return todos;
  }

  @Mutation(() => Todo)
  async addTodo(@Arg("title") title: string) {
    const todo = await this.todoService.add(title);
    return todo;
  }

  @Mutation(() => Todo)
  async switchTodo(@Arg("id") id: number) {
    const todo = await this.todoService.switch(id);
    return todo;
  }
}
