import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { RaceProvider } from "../context";
import client from "../apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RaceProvider>
        <Component {...pageProps} />
      </RaceProvider>
    </ApolloProvider>
  );
}

export default MyApp;
