import React from "react";
import "./style.css";
import useCount from "./customHook";
import withCustomHook from "./assets/withCustomHook.jpg";
import withoutCustomHook from "./assets/withoutCustomHook.png";

export default function App_23() {
  var [count, input] = useCount(0);

  return (
    <div>
      <div>
        <div>
          <h3>
            This project is creatd to practice{" "}
            <span className="highlight">Custom Hooks</span> in React JS. <br />{" "}
            A custom hook named <span className="highlight"> "useCount"</span>{" "}
            is used to change the number of times a user has clicked the{" "}
            <span className="highlight"> counter button</span>.
          </h3>
        </div>
        <button {...input}> {count} </button>
        <div>
          <h3>WITHOUT USING CUSTOM HOOKS</h3>
          <img
            src={withoutCustomHook}
            className="withoutCustomHook"
            alt="withoutCustomHook"
          />
          <h3>USING CUSTOM HOOKS</h3>
          <img
            src={withCustomHook}
            className="withCustomHook"
            alt="withCustomHook"
          />
        </div>
      </div>
    </div>
  );
}
