import { SummaryContainer } from "./styles";
import entradaImg from "../../assets/Entradas.svg";
import saidaImg from "../../assets/Saídas.svg";
import TotalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposits += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdrawals += transaction.amount;
        accumulator.total -= transaction.amount;
      }

      return accumulator;
    },
    {
      deposits: 0,
      withdrawals: 0,
      total: 0,
    }
  );

  return (
    <>
      <SummaryContainer>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradaImg} alt="Entradas" />
          </header>
          <strong>
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposits)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={saidaImg} alt="Entradas" />
          </header>
          <strong>
            -{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.withdrawals)}{" "}
          </strong>
        </div>
        <div>
          <header>
            <p>Total</p>
            <img src={TotalImg} alt="Entradas" />
          </header>
          <strong>
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}{" "}
          </strong>
        </div>
      </SummaryContainer>
    </>
  );
}
