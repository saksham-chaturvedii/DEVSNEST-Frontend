import { createContext, useState } from "react";

const Context = createContext({});

export function ContextFunc({ children }) {
  //A parent component that contains all the children components whose states we want to use in different files
  const [foodInput, setFoodInput] = useState(""); //item input
  const [calorieInput, setCalorieInput] = useState(""); //calorieinput
  const [foodList, setFoodList] = useState([
    {
      foodInput: "Pizza",
      calorieInput: "56",
    },
    {
      foodInput: "Burger",
      calorieInput: "69",
    },
  ]); //fooditem

  // console.log(foodInput, calorieInput);
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
