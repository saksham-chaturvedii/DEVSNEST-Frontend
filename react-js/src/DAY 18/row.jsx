import Block from "./block";

const Row = (props) => {
    //m by n matrix
    let rows = 8;
  return (
        <div className = "row_container">
            {
                [...Array(rows)].map((item, index) => (
                    <Block key = {index} row_item={index} col_item = {props.col_item}/>
                ))
            }

            {/* Same as:
                <Block />    
                <Block />    
                <Block />    8 times
            */}
        </div>
    );
}

export default Row;
