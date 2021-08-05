import { createContext, useState } from "react";

const Context = createContext({});

export function ContextFunc({ children }) {
  //component
  const [foodInput, setFoodInput] = useState("");
  const [calorieInput, setCalorieInput] = useState("");
  const [foodList, setFoodList] = useState([]);
  console.log(foodInput, calorieInput);
  return (
    <Context.Provider
      value={{
        foodInput,
        setFoodInput,
        calorieInput,
        setCalorieInput,
        foodList,
        setFoodList,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context; //not a component, use this to retrieve data stored in context
