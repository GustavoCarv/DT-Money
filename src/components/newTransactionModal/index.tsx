import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import entradaImg from "../../assets/Entradas.svg";
import saidaImg from "../../assets/Saídas.svg";
import { FormEvent, useState } from "react";
import {useTransactions} from "../../hooks/useTransactions";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [transactionType, setTransactionType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      category,
      type: transactionType,
    });


    setTitle('');
    setValue(0);
    setCategory('');
    
    onRequestClose();
  }

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
      <Container onSubmit={handleCreateNewTransation}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("deposit");
            }}
            isActive={transactionType === "deposit"}
            activeColor="green"
          >
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("withdraw");
            }}
            isActive={transactionType === "withdraw"}
            activeColor="red"
          >
            <img src={saidaImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
