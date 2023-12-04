import { ExpenseCard } from "./ExpenseCard";

export const ExpenseGrid = () => {
  return (
    <main>
      <section className="grid">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </section>
      <section className="cardInput"></section>
    </main>
  );
};
