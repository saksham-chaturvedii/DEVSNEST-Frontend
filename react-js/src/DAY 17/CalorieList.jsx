import "./style.css";
const CalorieList = (props)=>{
    return(
                <div className="list">
                    {props.food}: {props.calories}
                </div>
    )
}

export default CalorieList;