import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Navbar } from "../../components/Navbar";
import { Footer } from "./components/Footer";
import "./Home.css";

export const Home = () => {
  return (
    <body className="home">
      <Header />
      <Navbar showProfile={true} />
      <Main />
      <Footer />
    </body>
  );
};
