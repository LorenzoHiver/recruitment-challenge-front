"use client";

import "./styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { RaceProvider } from "./context";
import client from "./apollo/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <ApolloProvider client={client}>
          <RaceProvider>{children}</RaceProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
