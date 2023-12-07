import "./Dashboard.css";
import { Header } from "./components/Header";
import { ExpenseGrid } from "./components/ExpenseGrid.jsx";
import { InputArea } from "./components/InputArea.jsx";
import { ExpenseContextProvider } from "../../Context/ExpenseContext.jsx";
import { UserContextProvider } from "../../Context/UserContext.jsx";
import { useState } from "react";

export const Dashboard = () => {
  const [toggleInputForm, setToggleInputForm] = useState(false);

  return (
    <body className="dash">
      <header>
        <Header />
      </header>
      <hr />
      <ExpenseContextProvider>
        <main>
          <ExpenseGrid />
          <button
            id="addExpense"
            onClick={() => {
              setToggleInputForm(!toggleInputForm);
            }}
            style={{
              visibility: toggleInputForm === true ? "hidden" : "visible",
            }}
          >
            +
          </button>
          <InputArea
            visible={toggleInputForm}
            setVisibility={setToggleInputForm}
          />
        </main>
      </ExpenseContextProvider>
    </body>
  );
};
