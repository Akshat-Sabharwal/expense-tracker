import logo from "../../../assets/logo.png";
import { Navbar } from "../../../components/Navbar";

export const Header = () => {
  return (
    <header>
      <span>
        <img src={logo} alt="Header Logo" />
        <h1>Expentia</h1>
      </span>
    </header>
  );
};