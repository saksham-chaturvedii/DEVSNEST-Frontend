import { createContext, useState } from "react";

const Context = createContext({});

export function ContextFunc({ children }) {
  //A parent component that contains all the children components whose states we want to use in different files
  const [foodInput, setFoodInput] = useState(""); //item input
  const [calorieInput, setCalorieInput] = useState(""); //calorieinput
  const [foodList, setFoodList] = useState([]); //fooditem
  const [isEditing, setisEditing] = useState(false);
  const [editItem, setEditItem] = useState("");

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
        isEditing,
        setisEditing,
        editItem,
        setEditItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context; //not a component, use this to retrieve data stored in context
