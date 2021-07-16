import Row from "./row"

const Chessboard = ()=>{
    //m x n matrix
    const columns =8;
    return (
        <div className="col_container">
        {[...Array(columns)].map((item, index) => (
          <Row key={index} col_item={index} />
        ))}
        
      </div>
    );
}
 export default Chessboard;