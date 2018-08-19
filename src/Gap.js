import React from "react";
import classnames from "classnames";

class Gap extends React.Component {
  state = {
    selected: false,
    value: null
  };

  doSelect = () => {
    this.setState({ selected: true });
  };

  doDeselect = () => {
    this.setState({ selected: false });
  };

  doFill = value => {
    this.setState({
      value
    });
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this);
  };

  render() {
    const { selected, value } = this.state;
    const { onClick } = this.props;
    return (
      <div
        className={classnames("gap", {
          gap__selected: selected
        })}
        onClick={this.handleClick}
      >
        {value}
      </div>
    );
  }
}
export default Gap;
