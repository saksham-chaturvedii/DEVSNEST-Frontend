import Task from "./Task"
import CalorieList from "./CalorieList"
const build= (props)=>{
    return(
        <div className = "container">
            <Task />       
            <h2>CALORIE LIST</h2> 
            <div className="food_container">
                <CalorieList food="Pizza" calories="266"/>
                <CalorieList food="Burger" calories="295"/>
                <CalorieList food="Chocolate Brownie" calories="466 "/>
                <CalorieList food="Coca-Cola Classic	" calories="140"/>
                <CalorieList food="French fries" calories="312"/>
                <CalorieList food="Noodles" calories="138"/>
            </div>
        </div>

    );

}
export default build;