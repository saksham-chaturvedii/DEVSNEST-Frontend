import { InputAdornment, TextField, Input } from "@material-ui/core";
import { useContext } from "react";
import Context from "./context";

export default function CalorieInput() {
  const { calorieInput, setCalorieInput } = useContext(Context);

  return (
    // <TextField
    //   type="number"
    //   variant="outlined"
    //   helperText="Required *"
    //   placeholder="Calories"
    //   InputProps={{ endAdornment: <InputAdornment position="end">Kcal</InputAdornment> }}
    // ></TextField>
    <Input
      placeholder="Calorie Name"
      type="number"
      value={calorieInput}
      onChange={(e) => {
        setCalorieInput(e.target.value);
      }}
    ></Input>
  );
}
