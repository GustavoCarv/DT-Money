import { createContext, useEffect, useState } from "react";
import { api } from './services/api';


interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createAt: string;
}

interface TransactionProviderProps {
    children: React.ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt' >

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData);


export function TransactionProvider( {children}: TransactionProviderProps ){ 
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
      api
        .get("transactions")
  
        .then((response: any) => setTransactions(response.data["transactions"]));
    }, []);

    const createTransaction = (transaction: TransactionInput) => {
      api.post('/transactions', transaction)
    }
  
    return(
        <TransactionContext.Provider value={{transactions, createTransaction }} >
            {children}
        </TransactionContext.Provider>
    )
}