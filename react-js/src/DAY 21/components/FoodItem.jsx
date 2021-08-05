import React, { useContext } from "react";
import Context from "./context";

export default function FoodItem() {
  const { foodList } = useContext(Context);
  return (
    <ul>
      {foodList.map(({ foodInput, calorieInput }, index) => {
        return (
          <li key={index}>
            <div>Food: {foodInput}</div>
            <div>Calorie: {calorieInput}</div>
            <button>EDIT</button>
            <button>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
}
