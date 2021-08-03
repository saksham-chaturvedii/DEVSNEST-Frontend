import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          className={classes.AddItemStyles}
        >
          ADD ITEM
        </Button>
      </ThemeProvider>
    </div>
  );
}
