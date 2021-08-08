import React from "react";
import { Button, Input } from "@material-ui/core";

const Meme = (props) => {
  //   console.log(props.meme);
  return (
    <div className="MemeBox">
      <div className="renderedMeme">
        <img src={props.meme.url} alt="ClickedMeme" />
        <div>
          {[...Array(props.meme.box_count)].map((_, index) => (
            <Input
              className="renderedMemeInputBox"
              placeholder={`Caption ${index + 1}`}
              multiline={true} //Red Warning shown if written as multiline = "true" or 'true'
            ></Input>
          ))}
          {/* If written map((index)) instead of map((_, index)), index value will be shown undefined. Becasue, we create an array(size=box_count) of value undefined i.e. empty array. console.log(_) === undefined*/}
        </div>
      </div>
      <div>
        <span className="generate-btn">
          <Button variant="contained" color="primary">
            Generate Meme
          </Button>
        </span>
        <span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              props.setMeme(false);
            }}
          >
            Choose Another Meme
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Meme;
