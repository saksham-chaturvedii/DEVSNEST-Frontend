import React from "react";
import ItemInput from "./components/itemInput";
import CalorieInput from "./components/calorieInput";
import AddItemButton from "./components/AddItemButton";
import "./style.css";
import { useState } from "react";

const BuiltApp = () => {
  const [foodItem,setItem] = useState();
  const [foodList, setFoodList] = useState([]);

  return (
    <>
      <div className="MainContainerBox">
        <h2>CRUD CALORIE TRACKER USING REACT JS & MATERIAL UI</h2>
        <div>
          <div
            className="ItemInput"
            onChange={(e) => {
              setItem(foodItem);
            }}
            //  value={foodItem}
          >
            <ItemInput></ItemInput>
          </div>
          <div className="CalorieInput">
            <CalorieInput></CalorieInput>
          </div>
        </div>
        <div className="AddItem" onClick={()=>{
          // setItem(""); Not Working
          // setFoodList([...foodItem, foodList])
          console.log(foodList);
        }}>
          <AddItemButton></AddItemButton>
        </div>
      </div>
    </>
  );
};

export default BuiltApp;
