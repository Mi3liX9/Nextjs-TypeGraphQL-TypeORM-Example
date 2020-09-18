import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { Todo } from "src/features/todos/todo.entitiy";

const MyQuery = gql`
  query MyQuery {
    todoList
  }
`;

export default function Home() {
  const { data, loading } = useQuery<{ todoList: Todo[] }>(MyQuery);
  console.log(data);
  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data?.todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
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
