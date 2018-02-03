import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import _ from "lodash";

// HINT User CustomDropdown.js here

export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange() {}

  render() {
    return <div className="MultiDropdown" />;
  }
}

MultiDropdown.propTypes = {};
