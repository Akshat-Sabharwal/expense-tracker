import "./Dashboard.css";
import { Header } from "./components/Header";
import { ExpenseGrid } from "./components/ExpenseGrid.jsx";
import { InputArea } from "./components/InputArea.jsx";
import { ExpenseContextProvider } from "../../Context/ExpenseContext.jsx";

export const Dashboard = () => {
  return (
    <body className="dash">
      <header>
        <Header />
      </header>
      <ExpenseContextProvider>
        <main>
          <ExpenseGrid />
          <InputArea />
        </main>
      </ExpenseContextProvider>
    </body>
  );
};
