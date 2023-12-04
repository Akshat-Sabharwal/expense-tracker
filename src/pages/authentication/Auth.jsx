import "./Auth.css";
import { Form } from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authForm from "../../assets/form.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <body className="auth">
      <header>
        <Link to="/" className="back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </header>
      <section className="main">
        <aside className="left">
          <img src={authForm} alt="Authentication Form" />
        </aside>
        <hr className="divider"></hr>
        <aside className="right">
          <Form />
        </aside>
      </section>
    </body>
  );
};
