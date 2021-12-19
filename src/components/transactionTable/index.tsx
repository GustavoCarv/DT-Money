import { useContext,  } from "react";
import { TransactionContainer } from "./styles";
import { TransactionContext } from "../../TransactionContext";

export function TransactionTable() {
  const {transactions} = useContext(TransactionContext);

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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.title}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}) 
                  </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createAt)
                  )}
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TransactionContainer>
  );
}
