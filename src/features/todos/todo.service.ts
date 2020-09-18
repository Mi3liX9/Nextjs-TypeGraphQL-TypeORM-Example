import { Todo } from "./todo.entitiy";
import { Repository } from "typeorm";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class TodoService {
  constructor(
    @InjectRepository()
    private readonly todoResolver: Repository<Todo>
  ) {}

  async getAll() {
    return await this.todoResolver.find();
  }

  add = async (title: string) => await this.todoResolver.save({ title });
}
