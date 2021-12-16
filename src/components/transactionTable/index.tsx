import { useEffect, useState } from "react";
import { TransactionContainer } from "./styles";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api
      .get("/transactions")

      .then((response) => console.log(response.data));
  }, []);

  const [data, setData] = useState([]);

  return (
    <TransactionContainer>
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
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="withdrawal"> - R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
        </tbody>
      </table>
    </TransactionContainer>
  );
}
