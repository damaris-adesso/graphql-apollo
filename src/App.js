import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";
import ExchangeRatePage from "./ExchangeRatePage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
       <ExchangeRatePage />
      </div>
    </ApolloProvider>
  );
}

export default App;
