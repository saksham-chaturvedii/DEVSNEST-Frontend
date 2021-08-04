import { InputAdornment, TextField } from "@material-ui/core";

export default function CalorieInput() {
  return (
    <TextField
      type="number"
      variant="outlined"
      helperText="Required *"
      placeholder="Calories"
      InputProps={{ endAdornment: <InputAdornment position="end">Kcal</InputAdornment> }}
    ></TextField>
  );
}
