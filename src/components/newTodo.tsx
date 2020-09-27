import React, { FormEvent, useEffect, useState } from "react";
import { useAddTodoMutation, useTodoQuery } from "src/hooks/useTodos";
import styled from "styled-components";

const NewTodo: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [enabledButton, setEnabledButton] = useState(true);
  const { refetch } = useTodoQuery();
  const [mutateAdd] = useAddTodoMutation();

  useEffect(() => {
    if (title == "") {
      setEnabledButton(false);
    } else setEnabledButton(true);
  }, [title]);

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnabledButton(false);
    await mutateAdd({ variables: { title } });
    await refetch();
    setTitle("");
    setEnabledButton(true);
  };

  return (
    <StyledForm onSubmit={(e) => addTodo(e)}>
      <StyledInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <StyledButton type="submit" disabled={!enabledButton}>
        add Todo
      </StyledButton>
    </StyledForm>
  );
};

export default NewTodo;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 35px;
`;

const StyledButton = styled.button`
  background: coral;
  border: 0;
  width: 70px;
  height: 35px;
`;
