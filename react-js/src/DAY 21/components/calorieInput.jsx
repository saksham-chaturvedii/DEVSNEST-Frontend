import { TextField } from "@material-ui/core";

export default function itemInput() {
  return (
    <TextField
      variant="outlined"
      helperText="Required *"
      placeholder="Calories"
    ></TextField>
  );
}
