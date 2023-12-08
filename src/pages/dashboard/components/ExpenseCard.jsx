import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ExpenseContext } from "../../../context/ExpenseContext";

export const ExpenseCard = ({ id, amount, description, tag }) => {
  const [hover, setHover] = useState(false);
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const deleteCard = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    console.log(expenses);
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexFlow: "column wrap",
        gap: "0.5rem",
        padding: "1.8rem",
        width: "fit-content",
        maxWidth: "35%",
        height: "auto",
        borderRadius: "1rem",
        boxShadow: "0em 0.3rem 0.5rem 0.1rem #b9b9b9",
        backgroundColor: "#D5F7E6",
      }}
      id={id}
    >
      <FontAwesomeIcon
        icon={faTrash}
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          right: "1.6rem",
          top: "2.2rem",
          opacity: "0.7",
          fontSize: "1.3rem",
          transition: "0.3s ease",
          color: hover ? "red" : "#1a2e35",
          transform: hover ? "scale(1.05)" : "none",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => deleteCard(id)}
      />
      <h1
        style={{
          color: "#1A2E35",
          marginRight: "4rem",
          marginTop: "0",
        }}
      >
        ${amount}
      </h1>
      <p
        style={{
          color: "#1a2e35",
          marginBottom: "0.5rem",
          width: "80%",
          overflowWrap: "break-word",
        }}
      >
        {description}
      </p>
      {tag !== "" && (
        <span
          style={{
            color: "white",
            backgroundColor: "#87d7af",
            padding: "0.5rem 1rem",
            borderRadius: "5rem",
            margin: "0.6rem 0.7rem 0.2rem 0rem",
          }}
        >
          {tag}
        </span>
      )}
    </div>
  );
};
