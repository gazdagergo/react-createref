import React from "react";
import CustomTextInput from "./CustomTextInput";
import CustomTextInput2 from "./CustomTextInput2";

class AutoFocusTextInput extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <div>
        <CustomTextInput ref={this.textInput} />
        <CustomTextInput2 ref={this.textInput} />
      </div>
    );
  }
}

export default AutoFocusTextInput;
