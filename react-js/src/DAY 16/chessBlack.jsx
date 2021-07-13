import "./style.css";
import Cwhite from "./chessWhite";
const Chess =()=>
{
    return(
        <div className="chessBoard">
            <div className="container black_box"></div>
            <Cwhite />
            <div className="container black_box"></div>
            <Cwhite />
            <div className="container black_box"></div>
            <Cwhite />
            <div className="container black_box"></div>
            <Cwhite />
       </div>
    );
}
export default Chess;