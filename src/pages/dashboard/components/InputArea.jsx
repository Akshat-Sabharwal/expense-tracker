import { useState, useContext, useReducer, useEffect } from "react";
import { ExpenseContext } from "../../../Context/ExpenseContext";

export const InputArea = () => {
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
    tags: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "amount":
        return { ...state, amount: action.value };

      case "description":
        return { ...state, description: action.value };

      case "tag":
        return { ...state, tags: [...state.tags, action.value] };

      case "update":
        return initialState;
    }
  };

  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [formState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => console.log(formState), [formState]);

  const handleSubmit = (e) => {
    setExpenses((prevState) => [
      ...prevState,
      {
        amount: formState.amount,
        description: formState.description,
        tags: formState.tags,
      },
    ]);
    dispatch({ type: "update" });
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
        value={formState.tags[0]}
        onChange={(e) => {
          dispatch({ type: "tag", value: e.target.value });
          console.log(e.target.value);
        }}
      >
        <option value="" disabled defaultValue>
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
