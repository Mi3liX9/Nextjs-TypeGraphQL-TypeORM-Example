import { gql, useMutation, useQuery } from "@apollo/client";
import type { Todo as TodoType } from "src/features/todos/todo.entitiy";

type TodoListProps = { todoList: TodoType[] };

export const TodoQuery = gql`
  query Query {
    todoList {
      title
      id
      isDone
    }
  }
`;

export const SwitchMutation = gql`
  mutation SwitchTodo($id: Float!) {
    switchTodo(id: $id) {
      isDone
      title
    }
  }
`;

export const AddMutation = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      isDone
    }
  }
`;

export const useTodoQuery = () => useQuery<TodoListProps>(TodoQuery);
export const useSwithTodoMutation = () => useMutation<TodoType>(SwitchMutation);
export const useAddTodoMutation = () => useMutation<TodoType>(AddMutation);
