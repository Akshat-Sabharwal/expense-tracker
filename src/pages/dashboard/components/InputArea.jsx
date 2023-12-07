import { useState, useContext, useReducer, useEffect } from "react";
import { ExpenseContext } from "../../../Context/ExpenseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCross } from "@fortawesome/free-solid-svg-icons";

export const InputArea = ({ visible, setVisibility }) => {
  const [tags, setTags] = useState([
    "Food",
    "Tech",
    "Clothing",
    "Investment",
    "Misc.",
  ]);

  const initialState = {
    amount: undefined,
    description: "",
    tag: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "amount":
        return {
          ...state,
          amount: action.value,
        };

      case "description":
        return {
          ...state,
          description: action.value,
        };

      case "tag":
        return {
          ...state,
          tag: action.value,
        };

      case "update":
        state = initialState;
        state.amount = "";
        return state;
    }
  };

  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    setExpenses((prevState) => [
      ...prevState,
      {
        id: `${formState.amount}${formState.description}${formState.tag}`,
        amount: formState.amount,
        description: formState.description,
        tag: formState.tag,
      },
    ]);
    dispatch({ type: "update" });
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        visibility: visible === true ? "visible" : "hidden",
      }}
    >
      <button
        onClick={() => {
          setVisibility(!visible);
        }}
        id="toggleVisibility"
      >
        <FontAwesomeIcon icon={faCancel} />
      </button>
      <input
        type="number"
        placeholder="Amount"
        value={formState.amount}
        onChange={(e) => dispatch({ type: "amount", value: e.target.value })}
      />
      <input
        type="textarea"
        placeholder="Description"
        value={formState.description}
        onChange={(e) =>
          dispatch({ type: "description", value: e.target.value })
        }
      />
      <select
        placeholder="Choose"
        value={formState.tag}
        onChange={(e) => {
          dispatch({ type: "tag", value: e.target.value });
        }}
      >
        <option
          value=""
          disabled
          style={{
            color: "grey",
          }}
        >
          Choose
        </option>
        {tags.map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
      <input type="submit" value="+" id="submit" />
    </form>
  );
};
