import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

export const Form = () => {
  const initialState = {
    username: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.value };

      case "password":
        return { ...state, password: action.value };

      case "usernameValid":
        return { ...state, usernameValid: action.value };

      case "passwordValid":
        return { ...state, passwordValid: action.value };

      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(reducer, initialState);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("something...");
    setCurrentUser({
      username: formState.username,
      password: formState.password,
    });
    navigate("/dashboard");
  };

  const validateInput = (type, value) => {
    if (type === "username") {
      value.length === 0
        ? dispatch({ type: "usernameValid", value: false })
        : dispatch({ type: "usernameValid", value: true });
    } else if (type === "password") {
      value.length < 8
        ? dispatch({ type: "passwordValid", value: false })
        : dispatch({ type: "passwordValid", value: true });
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <fieldset>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={formState.username}
          onChange={(e) => {
            validateInput("username", e.target.value);
            dispatch({ type: "username", value: e.target.value });
          }}
        />
        {!formState.usernameValid && (
          <p
            style={{
              fontSize: "0.9rem",
              margin: "-1.5rem 0rem 0rem 2.5rem",
              letterSpacing: "0.05rem",
              alignSelf: "flex-start",
            }}
          >
            Enter your username
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={formState.password}
          onChange={(e) => {
            validateInput("password", e.target.value);
            dispatch({ type: "password", value: e.target.value });
          }}
        />
        {!formState.passwordValid && (
          <p style={{ alignSelf: "flex-start", marginLeft: "2.5rem" }}>
            Password of atleast 8 characters
          </p>
        )}
      </fieldset>

      <button
        type="submit"
        id="submit"
        disabled={
          formState.passwordValid === true && formState.usernameValid === true
            ? false
            : true
        }
      >
        Submit
      </button>
    </form>
  );
};
