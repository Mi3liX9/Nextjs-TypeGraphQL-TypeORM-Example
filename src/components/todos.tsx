import React from "react";
import styled from "styled-components";
import Todo from "./todo";
import { useSwithTodoMutation, useTodoQuery } from "src/hooks/useTodos";

const TodoList: React.FC = () => {
  const { data, loading, refetch } = useTodoQuery();
  const [mutateSwitch] = useSwithTodoMutation();

  const switchTodo = async (id: number) => {
    await mutateSwitch({ variables: { id: Number(id) } });
    await refetch();
  };

  const todos = data?.todoList!;

  if (loading) return <span>loading...</span>;

  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <Todo {...todo} click={() => switchTodo(todo.id)} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;

const StyledTodoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
