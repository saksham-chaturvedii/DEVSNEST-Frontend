import React, { useState, useEffect } from "react";
import CalorieInput from "./calorieInput";
import { Input } from "@material-ui/core";

export const CalorieBox = (props) => {
  const { item, handleDel, handleEdit, index } = props;
  const [isEditing, setisEditing] = useState(false);
  const [editItem, setEditItem] = useState(item.foodInput);
  const [editItemCalorie, setEditItemCalorie] = useState(item.calorieInput);

  const handleItemOnChange = (e) => {
    setEditItem(e.target.value);
  };

  const handleCalorieOnChange = (e) => {
    setEditItemCalorie(e.target.value);
  };

  useEffect(() => {
    setEditItem(item.foodInput);
    setEditItemCalorie(item.calorieInput);
  }, [item.foodInput, item.calorieInput]);

  return (
    <>
      {isEditing ? (
        <>
          <div className="ItemInput">
            <Input
              type="text"
              placeholder="Item Name"
              value={editItem}
              onChange={(e) => handleItemOnChange(e)}
            ></Input>
          </div>
          <div className="CalorieInput">
            <Input
              type="number"
              placeholder="Calories"
              value={editItemCalorie}
              onChange={(e) => handleCalorieOnChange(e)}
            ></Input>
          </div>
          <button
            onClick={() => {
              setisEditing(!isEditing);
              handleEdit(index, editItem, editItemCalorie);
            }}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <h3>{item.foodInput}</h3>
          <div>Consumed Calories: {item.calorieInput}.</div>
          <button
            onClick={() => {
              setisEditing(!isEditing);
            }}
          >
            EDIT
          </button>
        </>
      )}

      <button
        onClick={() => {
          handleDel(index);
        }}
      >
        DELETE
      </button>
    </>
  );
};
