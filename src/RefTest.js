import React from "react";
import Gap from "./Gap";
import Solution from "./Solution";

class RefTest extends React.Component {
  gapRefs = [];

  state = {
    selectedGap: null
  };

  componentDidMount() {
    const { selectedGapIndex } = this.state;
    this.setSelectedGap(this.gapRefs[0]);
  }

  setGapRef = ref => {
    this.gapRefs.push(ref);
  };

  setSelectedGap = selectedGap => {
    const { selectedGap: prevGap } = this.state;
    prevGap && prevGap.doDeselect();
    this.setState({ selectedGap });
    selectedGap.doSelect();
  };

  handleClickGap = that => {
    that && this.setSelectedGap(that);
  };

  handleFillGap = value => {
    const { selectedGap } = this.state;
    selectedGap.doFill(value);
    this.goToNextGap(selectedGap);
  };

  goToNextGap = selectedGap => {
    const index = this.gapRefs.indexOf(selectedGap);
    this.gapRefs[index + 1] && this.setSelectedGap(this.gapRefs[index + 1]);
  };

  render() {
    return (
      <div>
        <div className="gap-wrap">
          <Gap ref={this.setGapRef} onClick={this.handleClickGap} />
          <Gap ref={this.setGapRef} onClick={this.handleClickGap} />
        </div>
        <div>
          <Solution onClick={this.handleFillGap} value="foo" />
          <Solution onClick={this.handleFillGap} value="bar" />
        </div>
      </div>
    );
  }
}

export default RefTest;
