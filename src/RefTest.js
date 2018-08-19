import React from "react";
import Gap from "./Gap";
import Solution from "./Solution";

class RefTest extends React.Component {
  gapRef = React.createRef();

  handleClickGap = () => {
    this.gapRef.current.doSelect();
  };

  handleFillGap = value => {
    this.gapRef.current.doFill(value);
  };

  render() {
    return (
      <div>
        <Gap ref={this.gapRef} onClick={this.handleClickGap} />
        <Solution onClick={this.handleFillGap} />
      </div>
    );
  }
}

export default RefTest;
