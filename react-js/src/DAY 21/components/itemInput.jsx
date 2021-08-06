import { Input } from "@material-ui/core";
import { useContext } from "react";
import Context from "./context";

export default function ItemInput() {
  const { foodInput, setFoodInput } = useContext(Context);
  function HandleInput(e) {
    setFoodInput(e.target.value);
  }
  // useEffect(() => {
  // console.log(foodInput);})
  // [foodInput]); apple -> appl[bec of async working] -> apple [output]

  return (
    <div>
      <Input
        type="text"
        placeholder="Item Name"
        value={foodInput}
        onChange={HandleInput}
      ></Input>
    </div>
  );
}
