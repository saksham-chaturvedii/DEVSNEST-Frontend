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
    display: "flex",
    // justifyContent: "center",
    alignSelf: "center",
    color: "white",
    width: "35vw",
    marginBottom: "2rem",
    backgroundColor: "#2196f3 !important",
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
    if (!foodInput || !calorieInput) {
      alert("Inputs are mandatory.");
      return;
    }
    setFoodList([...foodList, { foodInput, calorieInput }]);
    setFoodInput("");
    setCalorieInput("");
  };
  // useEffect(()=>{
  //   console.log(foodList);
  // })

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.AddItemStyles}
        onClick={AddItem}
      >
        ADD ITEM
      </Button>
    </div>
  );
}
