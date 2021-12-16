import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import entradaImg from "../../assets/Entradas.svg";
import saidaImg from "../../assets/Saídas.svg";
import { useState } from "react";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const [transactionType, setTransactionType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        +
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("deposit");
            }}
            isActive={transactionType === 'deposit'}
            activeColor ='green' 
          >
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("withdraw");
            }}
            isActive={transactionType === 'withdraw'}
            activeColor ='red'
          >
            <img src={saidaImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
