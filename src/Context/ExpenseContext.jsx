import { createContext, useState } from "react";

export const ExpenseContext = createContext([]);

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};
