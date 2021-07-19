import Task from "./Task";
import CalorieList from "./CalorieList";

const App = (props) => {
  var calorie_arr = [
    { food: "Pizza", calories: "266" },
    { food: "Burger", calories: "295" },
    { food: "Chocolate Brownie", calories: "466" },
    { food: "Coca-Cola Classic", calories: "140" },
    { food: "French fries", calories: "312" },
    { food: "Noodles", calories: "138" },
  ];
  return (
    <div className="container">
      <Task />
      <h2>CALORIE LIST</h2>
      <div className="food_container">
        {calorie_arr.map((item, index) => (
          <CalorieList key={index} food={item.food} calories={item.calories} />
        ))}
      </div>
    </div>
  );
};
export default App;