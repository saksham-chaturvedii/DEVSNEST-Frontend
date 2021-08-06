import React, { useContext } from "react";
import Context from "./context";
import { CalorieBox } from "./CalorieBox.jsx";

export default function FoodItem() {
  const { foodList, setFoodList } = useContext(Context);

  const handleDel = (index) => {
    const NewfoodList = foodList.filter((item) => item !== foodList[index]);
    setFoodList(NewfoodList);
  };

  const handleEdit = (id, editItem, editItemCalorie) => {
    const curr = foodList.map((item, index) => {
      if (index === id) {
        return {
          foodInput: editItem,
          calorieInput: editItemCalorie,
        };
      } else {
        return item;
      }
    });
    setFoodList(curr);
  };

  return (
    <>
      {foodList.map((item, index) => (
        <CalorieBox
          key={index}
          handleDel={handleDel}
          handleEdit={handleEdit}
          index={index}
          item={item}
        />
      ))}
    </>
  );
}
