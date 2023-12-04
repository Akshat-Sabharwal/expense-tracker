import { ExpenseContext } from "../../../Context/ExpenseContext";
import { ExpenseCard } from "./ExpenseCard";
import { useContext } from "react";

export const ExpenseGrid = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  console.log(typeof expenses);
  return (
    <section className="grid">
      {expenses.length === 0 ? (
        <h4>No expenses being tracked</h4>
      ) : (
        expenses.map((card) => (
          <ExpenseCard
            amount={card.amount}
            description={card.description}
            tags={card.tags}
          />
        ))
      )}
    </section>
  );
};
