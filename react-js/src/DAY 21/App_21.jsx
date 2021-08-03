import React from "react";
import ItemInput from "./components/itemInput";
import CalorieInput from "./components/calorieInput";
import AddItemButton from "./components/AddItemButton";
import "./style.css";

const builtApp = () => {
  return (
    <>
      <div className="MainContainerBox">
        <h2>CRUD CALORIE TRACKER USING REACT JS & MATERIAL UI</h2>
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
      </div>
    </>
  );
};

export default builtApp;
