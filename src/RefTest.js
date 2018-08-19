import React from "react";
import Gap from "./Gap";
import Solution from "./Solution";

class RefTest extends React.Component {
  firstGap = React.createRef();

  state = {
    selectedGap: null
  };

  componentDidMount() {
    this.setSelectedGap(this.firstGap.current);
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
  };

  render() {
    return (
      <div>
        <div className="gap-wrap">
          <Gap ref={this.firstGap} onClick={this.handleClickGap} />
          <Gap onClick={this.handleClickGap} />
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
