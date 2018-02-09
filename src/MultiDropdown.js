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
  getCountryList(value) {
    if (value.country) {
      this.setState({ country: value.country.value, city: "" }, () => {
        this.props.onChange(this.state);
      });
    }
  }
  getCityList(value) {
    if (value.city) {
      this.setState({ city: value.city.value }, () => {
        this.props.onChange(this.state);
      });
    }
  }
  onChange(value) {
    if (value.country) {
      this.getCountryList(value);
    }
    if (value.city && this.state.country) {
      this.getCityList(value);
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
        <div>
          <CustomDropdown
            placeholder="Select Country"
            options={this.countryList}
            value={this.state.country}
            onChange={country => this.onChange({ country })}
          />
        </div>
        <div>
          <CustomDropdown
            placeholder="Select City"
            options={cityList}
            value={this.state.city}
            onChange={city => this.onChange({ city })}
          />
        </div>
      </div>
    );
  }
}

MultiDropdown.propTypes = {
  onChange: PropTypes.func
};
