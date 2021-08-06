import React, { useContext, useState } from "react";
import Context from "./context";
import { Input } from "@material-ui/core";
import ItemInput from "./itemInput";
import CalorieInput from "./calorieInput";

// const deleteItem=(e)=>{
//   return(
//     console.log(e.target.foodInput)
//   );
// }
export default function FoodItem() {
  const {
    foodList,
    setFoodList,
    isEditing,
    setisEditing,
    setFoodInput,
    editItem,
    setEditItem,
  } = useContext(Context);

  const handleDel = (index) => {
    const NewfoodList = foodList.filter((item) => item !== foodList[index]);
    setFoodList(NewfoodList);
  };

  return (
    <>
      {foodList.map(({ foodInput, calorieInput }, index) => {
        return (
          <div key={index}>
            {isEditing ? (
              <>
                <div className="ItemInput">
                  <Input
                    type="text"
                    placeholder="Item Name"
                    value={editItem}
                    onChange={(e) => {
                      setEditItem(e.target.value);
                    }}
                  ></Input>
                </div>
                <div className="CalorieInput">
                  <CalorieInput></CalorieInput>
                </div>
              </>
            ) : (
              <>
                <h3>{foodInput}</h3>
                <div>Consumed Calories: {calorieInput}.</div>
              </>
            )}

            <button
              onClick={() => {
                setisEditing(!isEditing);
              }}
            >
              {isEditing ? "DONE" : "EDIT"}
            </button>

            <button onClick={()=>{handleDel(index)}}>DELETE</button>
          </div>
        );
      })}
    </>
  );
}
