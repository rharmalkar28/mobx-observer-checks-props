import React from "react";

class ComponentTwo extends React.Component {
  render() {
    console.log("ComponentTwo", this.props);
    return (
      <div>
        <span>Test ComponentTwo</span>
        <div>Div</div>
      </div>
    );
  }
}

export default ComponentTwo;
