import React from "react";
import ReactDOM from "react-dom";
import ComponentOne from "./ComponentOne";

import "./styles.css";

/*
understain observer checks for props change and then renders the child component
example remove observer from componentOne and see console
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hey"
    };
  }

  changeTest = () => {
    this.setState({ test: "buy" });
  };

  renderCom = () => {
    const { test } = this.state;
    return <ComponentOne test={test} />;
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2 onClick={this.changeTest}>
          Start editing to see some magic happen!
        </h2>
        {this.renderCom()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
