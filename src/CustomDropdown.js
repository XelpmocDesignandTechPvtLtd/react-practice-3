import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./CustomDropdown.css";
export default class CustomDropdown extends Component {
  onChange(val) {
    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }
  render() {
    return (
      <div className="CustomDropdown">
        <Select {...this.props} />
      </div>
    );
  }
}

CustomDropdown.propTypes = {
  onChange: PropTypes.func
};

CustomDropdown.defaultProps = {
  onChange: () => {}
};
