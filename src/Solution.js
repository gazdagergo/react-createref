import React, { Component } from "react";

class Solution extends Component {
  state = {
    value: "bar"
  };

  handleClick = () => {
    const { onClick } = this.props;
    const { value } = this.state;
    onClick(value);
  };

  render() {
    const { value } = this.state;
    return <div onClick={this.handleClick}>{value}</div>;
  }
}

export default Solution;
