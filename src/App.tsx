import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header/index";
import { Dashboard } from "./components/dashboard/index";
import { NewTransactionModal } from "./components/newTransactionModal/index";
import { TransactionTable } from "./components/transactionTable/index";
import { createServer } from "tls";

import Modal from "react-modal";
import { TransactionProvider } from "./TransactionContext";
import { useState } from "react";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
    
    

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />
      <TransactionTable />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
    </TransactionProvider>
  );
}

export default App;
