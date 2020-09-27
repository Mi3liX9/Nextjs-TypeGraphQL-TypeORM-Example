import { Todo } from "./todo.entitiy";
import { useRepository } from "src/lib/database";

export class TodoService {
  async getAll() {
    const [todoRepository] = await useRepository<Todo>("todos");
    const todos = await todoRepository.find();
    return todos.reverse();
  }

  async add(title: string) {
    const [todoRepository] = await useRepository<Todo>("todos");
    return await todoRepository.save({ title, isDone: false });
  }

  async switch(id: number) {
    const [todoRepository] = await useRepository<Todo>("todos");

    const todo = await todoRepository.findOne({ id });
    await todoRepository.update(id, {
      isDone: !todo?.isDone,
    });
    todo!.isDone = !todo?.isDone;
    return todo;
  }
}
