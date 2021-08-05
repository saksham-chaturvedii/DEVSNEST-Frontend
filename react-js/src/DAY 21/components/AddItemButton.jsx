import { Button } from "@material-ui/core";
import Context from "./context";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useContext, useEffect } from "react";

const useStyles = makeStyles({
  AddItemStyles: {
    color: "white",
    width: "40vw",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      contrastText: "#fff",
    },
  },
});

export default function AddItemButton() {
  const classes = useStyles();
  const {
    foodInput,
    calorieInput,
    foodList,
    setFoodList,
    setCalorieInput,
    setFoodInput,
  } = useContext(Context);
  const AddItem = (e) => {
    if(!foodInput || !calorieInput)
    {
      alert("Inputs are mandatory");
      return;
    }
    setFoodList([...foodList, {foodInput, calorieInput}]);
    setFoodInput("");
    setCalorieInput("");
  };
  useEffect(()=>{
    console.log(foodList);
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.AddItemStyles}
          onClick={AddItem}
        >
          ADD ITEM
        </Button>
      </ThemeProvider>
    </div>
  );
}
