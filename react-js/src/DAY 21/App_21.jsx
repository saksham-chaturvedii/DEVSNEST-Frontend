import React from "react";
import ItemInput from './components/itemInput';
import CalorieInput from './components/calorieInput';
import AddItemButton from './components/AddItemButton';
import './style.css';

const builtApp = ()=>{
return (
  <>
  <p>CALORIE TRACKER USING REACT JS & MATERIAL UI</p>
    <ItemInput></ItemInput> 
    <CalorieInput></CalorieInput>
  {/* <div className="InitialInputBox">
  </div>
  <div className="AddItem"> */}
    <AddItemButton></AddItemButton>
  {/* </div> */}
  </>
);
}

export default builtApp;