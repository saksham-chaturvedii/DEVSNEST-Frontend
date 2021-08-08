import React from "react";
import { Button, Input } from "@material-ui/core";

const Meme = (props) => {
  console.log(props.meme);
  return (
    <div className="MemeBox">
      <div className="renderedMeme">
        <img src={props.meme.url} alt="ClickedMeme" />
        <div>
          {[...Array(props.meme.box_count)].map((index) => (
            <Input
              className="renderedMemeInputBox"
              placeholder="Input"
              multiline="true"
            ></Input>
          ))}
        </div>
      </div>
      <Button variant="contained" color="primary">
        Generate Meme
      </Button>
    </div>
  );
};

export default Meme;
