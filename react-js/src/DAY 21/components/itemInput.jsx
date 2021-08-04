import { TextField } from "@material-ui/core";

export default function ItemInpu() {
  return (
    <TextField
      variant="outlined"
      helperText="Required *"
      placeholder="Item Name"
    ></TextField>
  );
}
