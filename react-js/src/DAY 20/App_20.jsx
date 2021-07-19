import React, { useState } from "react";
import Task from "./Task";
import CalorieList from "./CalorieList";

const App = (props) => {
  var calorie_arr = [
    { food: "Pizza", calories: "266", id: 1 },
    { food: "Burger", calories: "295", id: 2 },
    { food: "Chocolate Brownie", calories: "466", id: 3 },
    { food: "Coca-Cola Classic", calories: "140", id: 4 },
    { food: "French fries", calories: "312", id: 5 },
    { food: "Noodles", calories: "138", id: 6 },
  ];
  const [foodList, setFoodList] = useState(calorie_arr);

  return (
    <div className="container">
      <Task />
      <h2>CALORIE LIST</h2>
      <div className="food_container">
        { 
            foodList.length !== 0 ? 
            (
              foodList.map((item, index) => (
              <CalorieList key={index} food={item.food} calories={item.calories} setState={setFoodList} calorie_arr2={foodList} key2={item.id}/>))
            ) : <h2 style={{textAlign:"center"}}> List Empty </h2>
        }
      </div>
    </div>
  );
};
export default App;
