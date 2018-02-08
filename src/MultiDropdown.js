import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import _ from "lodash";
import CustomDropdown from "./CustomDropdown.js";
// HINT User CustomDropdown.js here

export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practice1: null,
      practice2: null
    };
  }
  getPracticeItem(practice1) {
    this.setState({ practice1 });
    this.props.onChange({ practice1, practice2: null });
  }
  getPracticeItemTwo(practice2) {
    this.setState({ practice2 });
    this.props.onChange({ practice1: this.state.practice1, practice2 });
  }
  getCountries() {
    const reactItem = countriesCities.getCountries().map(item => {
      return { value: item, label: item };
    });
    return reactItem;
  }
  getCities() {
    if (this.state.practice1) {
      const reactItem1 = countriesCities
        .getCities(this.state.practice1)
        .map(item => {
          return { value: item, label: item };
        });
      return reactItem1;
    }
    return [];
  }

  onChange(val, practiceItem) {
    if (val) {
      if (practiceItem == "practice1Item") {
        this.getPracticeItem(val.value);
      } else if (practiceItem == "practiceItemTwo") {
        this.getPracticeItemTwo(val.value);
      }
    }
  }
  render() {
    return (
      <div className="MultiDropdown">
        <div>
          <CustomDropdown
            value={this.state.practice1}
            options={this.getCountries()}
            onChange={val => this.onChange(val, "practice1Item")}
          />
        </div>
        <div>
          <CustomDropdown
            value={this.state.practice2}
            options={this.getCities()}
            onChange={val => this.onChange(val, "practiceItemTwo")}
          />
        </div>
      </div>
    );
  }
}

MultiDropdown.propTypes = {};
