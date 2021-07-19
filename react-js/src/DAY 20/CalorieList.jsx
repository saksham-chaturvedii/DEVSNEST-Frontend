import "./style.css";

// const deleteEntry = (props, setFoodList) =>{
//     const newFoodList = props.calorie_arr2.filter((element) => element !== props.index);
//     console.log(newFoodList);
//     console.log(1)
// };
// deleteEntry(props)

const CalorieList = (props) => {
  return (
    <div> 
      <div className="list">
        {props.food}: {props.calories} calories
        {props.calories >= 290 ? <div><br />!! High Calorie Food !! </div> : ""}
      </div>
          <button id="del" onClick={(e) => {
            const newFoodList = props.calorie_arr2.filter((element) => element.id !== props.key2);
            // console.log(props.calorie_arr2, props.key2);
            props.setState(newFoodList);
          }}> DELETE </button>
    </div>
  );
};

export default CalorieList;
