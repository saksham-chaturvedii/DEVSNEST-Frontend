import "./style.css"

const block = (props)=>{
    console.log(props);
    return (
      <>
        {(props.row_item % 2 === 0 && props.col_item % 2 === 0) ||
        (props.row_item % 2 === 1 && props.col_item % 2 === 1) ? (
          <div className="block" style={{ backgroundColor: "white" }}></div>
        ) : (
          <div className="block" style={{ backgroundColor: "black" }}>
            {" "}
          </div>
        )}
      </>
    );
}

export default block;