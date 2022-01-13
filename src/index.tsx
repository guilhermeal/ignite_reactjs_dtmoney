import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de website",
          type: "deposit",
          category: "Development",
          amount: 6000,
          createdAt: new Date("2021-12-10 10:15:00"),
        },
        {
          id: 2,
          title: "Financiamento Aptº",
          type: "withdraw",
          category: "Despesas Fixas",
          amount: 1600,
          createdAt: new Date("2021-12-20 20:15:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
