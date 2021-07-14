import "./style.css";
const CalorieList = (props)=>{
    return(
        <div>
                <div className="list">
                    {props.food}: {props.calories}
                </div>
        </div>
    )
}

export default CalorieList;