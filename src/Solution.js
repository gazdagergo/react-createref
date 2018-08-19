import React, { Component } from "react";
import classnames from "classnames";

class Solution extends Component {
  handleClick = () => {
    const { isPicked } = this.state;
    if (isPicked) return false;
    const { onClick, value } = this.props;
    this.setState({ isPicked: true });
    onClick(value);
  };

  state = {
    isPicked: false
  };

  render() {
    const { value } = this.props;
    const { isPicked } = this.state;
    return (
      <div
        className={classnames("solution", {
          solution__picked: isPicked
        })}
        onClick={this.handleClick}
      >
        {value}
      </div>
    );
  }
}

export default Solution;
