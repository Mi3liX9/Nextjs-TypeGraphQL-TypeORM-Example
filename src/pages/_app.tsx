// import "reflect-metadata";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/lib/apollo-client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
