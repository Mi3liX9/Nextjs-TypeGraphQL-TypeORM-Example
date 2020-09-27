import { initializeApollo } from "src/lib/apollo-client";
import TodoList from "src/components/todos";
import { TodoQuery } from "src/hooks/useTodos";
import NewTodo from "src/components/newTodo";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledDiv>
      <h2>Todo List</h2>
      <p>This is basic todo list, click on it to done.</p>
      <NewTodo />
      <TodoList />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 10px;
`;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: TodoQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
