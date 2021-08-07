import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

export const CalorieBox = (props) => {
  const { item, handleDel, handleEdit, index } = props;
  const [isEditing, setisEditing] = useState(false);
  // const [editItem, setEditItem] = useState(item.foodInput);
  // const [editItemCalorie, setEditItemCalorie] = useState(item.calorieInput);
  // to skip writing two separate function for calorire and foodinput handle.
  const [editData, setEditData] = useState({
    foodInput: item.foodInput,
    calorieInput: item.CalorieInput,
  });

  // const handleItemOnChange = (e) => {
  //   setEditItem(e.target.value);
  // };

  // const handleCalorieOnChange = (e) => {
  //   setEditItemCalorie(e.target.value);
  // };

  // useEffect(() => {
  //   setEditItem(item.foodInput);
  //   setEditItemCalorie(item.calorieInput);
  // }, [item.foodInput, item.calorieInput]);

  const handleItemDataOnChange = (e) => {
    const name = e.target.name; //different from name and value used below in html
    const value = e.target.value;
    console.table(name, value);
    setEditData({ ...editData, [name]: value });
    // console.log({...editData});

    //This is to understand how ... (spread operator) is working here
    // let obj = {a: 1, b:2}
    // undefined
    // let obj2 = {...obj}
    // undefined
    // obj2
    // {a: 1, b: 2}
    // let obj3 = {...obj, a:3}
    // undefined
    // obj3
    // {a: 3, b: 2}
  };

  useEffect(() => {
    setEditData({ foodInput: item.foodInput, calorieInput: item.calorieInput });
  }, [item.foodInput, item.calorieInput]);
  return (
    <>
      {isEditing ? (
        <div className="EditCalorieBox">
          <div className="ItemInput">
            <Input
              type="text"
              placeholder="Item Name"
              // value={editItem}
              name="foodInput"
              value={editData.foodInput}
              // onChange={(e) => handleItemOnChange(e)}
              onChange={(e) => handleItemDataOnChange(e)}
            ></Input>
          </div>
          <div className="CalorieInput">
            <Input
              type="number"
              placeholder="Calories"
              // value={editItemCalorie}
              name="calorieInput"
              value={editData.calorieInput}
              // onChange={(e) => handleCalorieOnChange(e)}
              onChange={(e) => handleItemDataOnChange(e)}
            ></Input>
          </div>
          <span>
            <Button
              type="submit"
              size="small"
              color="primary"
              onClick={() => {
                setisEditing(!isEditing);
                // handleEdit(index, editItem, editItemCalorie);
                handleEdit(index, editData.foodInput, editData.calorieInput);
              }}
            >
              {/* DONE */}
              <DoneIcon></DoneIcon>
            </Button>
          </span>
        </div>
      ) : (
        <div className="CalorieBox">
          <h3 className="foodTitle">{item.foodInput}</h3>
          <h3 className="calorietitle">{item.calorieInput} Calories.</h3>
          <div className="ButtonPosition">
            <span>
              <Button
                type="submit"
                size="small"
                color="primary"
                disableRipple="true"
                onClick={() => {
                  setisEditing(!isEditing);
                }}
              >
                {/* EDIT */}
                <EditIcon></EditIcon>
              </Button>
            </span>

            <span>
              <Button
                type="submit"
                size="small"
                color="secondary"
                disableRipple="true"
                onClick={() => {
                  handleDel(index);
                }}
              >
                {/* DELETE */}
                <DeleteRoundedIcon></DeleteRoundedIcon>
              </Button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
