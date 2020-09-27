import type { Todo as TodoEntity } from "src/features/todos/todo.entitiy";
import styled, { css } from "styled-components";

interface TodoProps extends TodoEntity {
  click: () => any;
}

const Todo: React.FC<TodoProps> = ({ click, id, title, isDone }) => {
  return (
    <StyledTodo isDone={isDone} key={id} onClick={click}>
      {isDone ? "☑️" : "📔"} {title}
    </StyledTodo>
  );
};

export default Todo;

const StyledTodo = styled.li<{ isDone: boolean }>`
  background-color: rgba(0, 0, 0, 0.1);
  width: 480px;
  height: 35px;
  padding: 10px;
  display: flex;
  align-items: center;
  ${({ isDone }) =>
    isDone
      ? css`
          text-decoration-line: line-through;
        `
      : null}
`;
