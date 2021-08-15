import React from "react";
import useCount from "./customHook";

export default function App_23() {
  var [count, input] = useCount(0);

  return (
    <>
      <div>
        This project is creatd to practice Custom Hooks. A custom hook named
        "useCount" is used to change the number of times a user has clicked the
        counter button.
        <button {...input}> {count} </button>
      </div>
    </>
  );
}
