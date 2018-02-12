import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import _ from "lodash";
import Select from "react-select";
import CustomDropdown from "./CustomDropdown.js";

export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: ""
    };
    this.countryList = _.map(countriesCities.getCountries(), country => {
      return {
        label: country,
        value: country
      };
    });
  }
  getCountryValue(value) {
    this.setState({ country: value.country.value, city: "" }, () => {
      this.props.onChange(this.state);
    });
  }
  getCityValue(value) {
    this.setState({ city: value.city.value }, () => {
      this.props.onChange(this.state);
    });
  }
  onChange(value) {
    if (value.country) {
      this.getCountryValue(value);
    }
    if (value.city) {
      this.getCityValue(value);
    }
  }
  render() {
    let cityList;
    if (this.state.country) {
      cityList = _.map(countriesCities.getCities(this.state.country), city => {
        return {
          label: city,
          value: city
        };
      });
    }
    return (
      <div className="MultiDropdown">
        <CustomDropdown
          placeholder="Select Country"
          options={this.countryList}
          value={this.state.country}
          onChange={country => this.onChange({ country })}
        />
        <CustomDropdown
          placeholder="Select City"
          options={cityList}
          value={this.state.city}
          onChange={city => this.onChange({ city })}
        />
      </div>
    );
  }
}

MultiDropdown.propTypes = {
  onChange: PropTypes.func
};
