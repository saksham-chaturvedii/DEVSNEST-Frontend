import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  AddItemStyles: {
    color: "white",
    width: "19rem"
  },
});

export default function AddItemButton() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.AddItemStyles}
      >
        ADD ITEM
      </Button>
    </div>
  );
}
