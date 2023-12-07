import { ExpenseContext } from "../../../Context/ExpenseContext";
import { ExpenseCard } from "./ExpenseCard";
import { useContext } from "react";
import emptyDashboard from "../../../assets/dashboard.png";

export const ExpenseGrid = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  return (
    <>
      {expenses.length === 0 ? (
        <section
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            marginTop: "2.6rem",
          }}
        >
          <img
            src={emptyDashboard}
            alt="Empty Dashboard"
            style={{
              maxHeight: "50vh",
              opacity: "0.8",
            }}
          />
          <h4
            style={{
              color: "#1A2E35",
              fontSize: "1.8rem",
              opacity: "0.6",
            }}
          >
            No expenses being tracked
          </h4>
        </section>
      ) : (
        <section
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "3rem",
            minWidth: "50%",
            maxWidth: "70%",
            padding: "4rem",
          }}
        >
          {expenses.map((card) => (
            <ExpenseCard
              id={`${card.amount}${card.description}${card.tag}`}
              amount={card.amount}
              description={card.description}
              tag={card.tag}
            />
          ))}
        </section>
      )}
    </>
  );
};
