import { Container } from "./styles";

export function TransactionsTable() {
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
