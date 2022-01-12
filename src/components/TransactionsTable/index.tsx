import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dev website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
            <td>Financiamento Apt</td>
            <td className="withdraw">- R$2.000,00</td>
            <td>Despesas Fixas</td>
            <td>10/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
