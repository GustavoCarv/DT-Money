import { SummaryContainer } from "./styles";
import entradaImg from "../../assets/Entradas.svg";
import saidaImg from "../../assets/Saídas.svg";
import TotalImg from "../../assets/Total.svg";
import { TransactionContext } from "../../TransactionContext";
import { useContext } from "react";

export function Summary() {
    const data = useContext(TransactionContext);
 
    return (
    <>
      <SummaryContainer>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradaImg} alt="Entradas" />
          </header>
          <strong> R$ 10 Uepas </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={saidaImg} alt="Entradas" />
          </header>
          <strong> - R$ 10 Uepas </strong>
        </div>
        <div>
          <header>
            <p>Total</p>
            <img src={TotalImg} alt="Entradas" />
          </header>
          <strong> R$ 10 Uepas </strong>
        </div>
      </SummaryContainer>
    </>
  );
}
