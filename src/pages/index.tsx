import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/lib/apollo-client";
import { Todo } from "src/features/todos/todo.entitiy";
import styled from "styled-components";

const MyQuery = gql`
  query Query {
    todoList {
      title
      id
    }
  }
`;

const AddQuery = gql`
  mutation($title: String) {
    addTodo(title: $title) {
      title
      id
      isDone
    }
  }
`;

const TodoList = styled.ul``;

const StyledTodo = styled.li`
  background-color: rgba(0, 0, 0, 0.1);
`;

export default function Home() {
  const { data, loading } = useQuery<{ todoList: Todo[] }>(MyQuery);
  if (loading) return <span>loading...</span>;

  return (
    <TodoList>
      {data?.todoList.map((todo) => (
        <StyledTodo key={todo.id}>{todo.title}</StyledTodo>
      ))}
    </TodoList>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
