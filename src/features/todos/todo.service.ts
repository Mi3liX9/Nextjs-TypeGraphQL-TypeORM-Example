import { Todo } from "./todo.entitiy";
import { Connection, getConnection, getRepository } from "typeorm";

export class TodoService {
  constructor(private readonly todoReposetory = getRepository<Todo>("todos")) {}

  async getAll() {
    return await this.todoReposetory.find();
  }

  async add(title: string) {
    return await this.todoReposetory.save({ title, isDone: false });
  }

  async switch(id: number) {
    const todo = await this.todoReposetory.findOne({ id });
    await this.todoReposetory.update(id, {
      isDone: !todo?.isDone,
    });
    todo!.isDone = !todo?.isDone;
    return todo;
  }
}
