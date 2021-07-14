import Task from "./DAY 17/Task"
import CalorieList from "./DAY 17/CalorieList"

const build= (props)=>{
    return(
        <div>
            <Task />       
            <h2>CALORIE LIST</h2> 
            <CalorieList food="Pizza" calories="266 calories"/>
            <CalorieList food="Burger" calories="295 calories"/>
            <CalorieList food="Chocolate Brownie" calories="466 calories"/>
            <CalorieList food="Coca-Cola Classic	" calories="140 calories"/>
            <CalorieList food="French fries" calories="312  calories"/>
            <CalorieList food="Noodles" calories="138 calories"/>
        </div>

    );

}
export default build;