import React from "react";
import Gap from "./Gap";
import Solution from "./Solution";

class RefTest extends React.Component {
  gapRef = React.createRef();

  state = {
    selectedGap: null
  };

  componentDidMount() {
    this.setSelectedGap(this.gapRef.current);
  }

  setSelectedGap = selectedGap => {
    const { selectedGap: prevGap } = this.state;
    prevGap && prevGap.doDeselect();
    this.setState({ selectedGap });
    selectedGap.doSelect();
  };

  handleClickGap = that => {
    this.setSelectedGap(that);
  };

  handleFillGap = value => {
    this.state.selectedGap.doFill(value);
    // this.gapRef.current.doFill(value);
  };

  render() {
    return (
      <div>
        <Gap ref={this.gapRef} onClick={this.handleClickGap} />
        <Gap onClick={this.handleClickGap} />
        <Solution onClick={this.handleFillGap} />
      </div>
    );
  }
}

export default RefTest;
