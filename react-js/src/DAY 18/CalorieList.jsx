import "./style.css";
const CalorieList = (props) => {
  return (
    <div className="list">
      {props.food}: {props.calories} calories
      {props.calories >= 290 ? <div><br />!! High Calorie Food !! </div> : ""}
    </div>
  );
};

export default CalorieList;
