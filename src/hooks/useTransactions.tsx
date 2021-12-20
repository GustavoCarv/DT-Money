import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api';


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
    createTransaction: (transaction: TransactionInput) => Promise<void>;
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

     const createTransaction = async (transactionInput: TransactionInput) => {
      const response = await api.post('/transactions', {...transactionInput, createAt: new Date()});
      const {transaction} = response.data; 

      setTransactions([...transactions, transaction]);
    }
  
    return(
        <TransactionContext.Provider value={{transactions, createTransaction }} >
            {children}
        </TransactionContext.Provider>
    )
} 

export function useTransactions(){
    const context = useContext(TransactionContext);

    return context;
}