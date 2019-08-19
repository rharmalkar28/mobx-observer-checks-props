import React from "react";
import { observer } from "mobx-react";
import ComponentTwo from "./ComponentTwo";
/*
understain observer checks for props change and then renders the child component
remove observer and see example
*/

class ComponentOne extends React.Component {
  renderComponent = () => {
    return <ComponentTwo test={2} />;
  };
  render() {
    console.log("ComponentOne", this.props);
    return (
      <div>
        <span>Test ComponentOne</span>
        <div>Div</div>
        {this.renderComponent()}
      </div>
    );
  }
}

export default observer(ComponentOne);
