import "./style.css";

const deleteEntry = (props) => {
  const newFoodList = props.calorie_arr2.filter(
    (element) => element.id !== props.key2
  );
  props.setState(newFoodList);
};

const CalorieList = (props) => {
  return (
    <div>
      <div className="list">
        {props.food}: {props.calories} calories
        {props.calories >= 290 ? (
          <div>
            <br />
            !! High Calorie Food !!{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        id="del"
        onClick={(e) => {
          deleteEntry(props);
        }}
      >
        {" "}
        DELETE{" "}
      </button>
    </div>
  );
};

export default CalorieList;
