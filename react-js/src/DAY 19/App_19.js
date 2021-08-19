import React, { Component } from "react";
import "./style.css";

class App_19 extends Component {
  render() {
    return (
      <div>
        <h3 className="heading">
          Created counter buttons using "State" and "Class Components" in
          REACT-JS.
          <br />
          Used <span style={{ color: "blueviolet" }}>
            {" "}
            "this.setState()"{" "}
          </span>{" "}
          and
          <span style={{ color: "blueviolet" }}> "prevState" </span> to update
          the count values.
        </h3>

        <div className="CounterButton">
          <CounterButton />
          <CounterButton />
          <CounterButton />
          <CounterButton />
        </div>
      </div>
    );
  }
}

class CounterButton extends Component {
  state = { count: 0 };

  counterUpdate = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <button class="button" onClick={this.counterUpdate}>
        {this.state.count}
      </button>
    );
  }
}

export default App_19;
