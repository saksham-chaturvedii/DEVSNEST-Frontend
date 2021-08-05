import React from "react";
import ItemInput from "./components/itemInput";
import CalorieInput from "./components/calorieInput";
import AddItemButton from "./components/AddItemButton";
import { ContextFunc } from "./components/context";
import FoodItem from "./components/FoodItem"
import "./style.css";

const BuiltApp = () => {
  return (
    <>
      <div className="MainContainerBox">
        <h2>CRUD CALORIE TRACKER USING REACT JS & MATERIAL UI</h2>
        <ContextFunc>
          <div>
            <div className="ItemInput">
              <ItemInput></ItemInput>
            </div>
            <div className="CalorieInput">
              <CalorieInput></CalorieInput>
            </div>
          </div>
          <div className="AddItem">
            <AddItemButton></AddItemButton>
          </div>
          <div>
            <FoodItem></FoodItem>
          </div>
        </ContextFunc>
      </div>
    </>
  );
};

export default BuiltApp;
