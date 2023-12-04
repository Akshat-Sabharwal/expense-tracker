import "./Dashboard.css";
import { Header } from "./components/Header";
import { ExpenseGrid } from "./components/ExpenseGrid.jsx";

export const Dashboard = () => {
  return (
    <body className="dash">
      <Header />
      <ExpenseGrid />
    </body>
  );
};
