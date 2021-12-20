
import { TransactionContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionTable() {
  const {transactions} = useTransactions();

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
                  }).format(transaction.amount)} 
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
