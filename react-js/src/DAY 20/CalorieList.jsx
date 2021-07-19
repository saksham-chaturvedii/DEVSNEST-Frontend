import "./style.css";
const CalorieList = (props) => {
  return (
    <div> 
      <div className="list">
        {props.food}: {props.calories} calories
        {props.calories >= 290 ? <div><br />!! High Calorie Food !! </div> : ""}
      </div>
          <button id="del"> DELETE </button>
    </div>
  );
};

export default CalorieList;
