import { Todo } from "./todo.entitiy";
import { database as db } from "src/lib/database";

export class TodoService {
  async getAll() {
    const connection = await db().connect();
    const todoRepo = connection.getRepository<Todo>("todos");
    return await todoRepo.find();
  }

  async add(title: string) {
    const connection = await db().connect();
    const todoRepo = connection.getRepository<Todo>("todos");
    return await todoRepo.save({ title, isDone: false });
  }

  async switch(id: number) {
    const connection = await db().connect();
    const todoRepo = connection.getRepository<Todo>("todos");

    const todo = await todoRepo.findOne({ id });
    await todoRepo.update(id, {
      isDone: !todo?.isDone,
    });
    todo!.isDone = !todo?.isDone;
    return todo;
  }
}
