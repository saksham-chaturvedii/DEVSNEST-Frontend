import "./style.css";
import Chess from "./chessBlack";

const Meme =()=>{
    return(
        <div >
            
            <h2>All Work done using React JS</h2>
            
            <div className="outer_container">
                <div className="image"></div>
                <div className="text">How relatable xD </div>
            </div>
                
            <div className = "BWcontainer ">
                <div className="BWcontainer-inner_border">
                <Chess />
                <Chess />
                <Chess />
                <Chess />
                </div>
            </div>
            <div className="text">Chess Board</div>
        </div>
        

        
    );

}

export default Meme;