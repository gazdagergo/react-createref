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

  doFill = value => {
    this.setState({
      value
    });
  };

  render() {
    const { selected, value } = this.state;
    const { onClick } = this.props;
    return (
      <div
        className={classnames("gap", {
          gap__selected: selected
        })}
        onClick={onClick}
      >
        {value}
      </div>
    );
  }
}
export default Gap;
