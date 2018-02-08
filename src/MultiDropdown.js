import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import _ from "lodash";
import CustomDropdown from "./CustomDropdown";

// HINT User CustomDropdown.js here

export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      cities: null
    };
  }
  selectCountries(country) {
    this.setState({ country });
    this.props.onChange({ country, cities: null });
  }
  selectGetCities(cities) {
    this.setState({ cities });
    this.props.onChange({ country: this.state.country, cities });
  }
  onChange(val, countryName) {
    if (val) {
      if (countryName == "country") {
        this.selectCountries(val.value);
      } else if (countryName == "cities") {
        this.selectGetCities(val.value);
      }
    }
  }
  getCountries() {
    let countries = countriesCities.getCountries().map(selectValue => {
      return {
        value: selectValue,
        label: selectValue
      };
    });
    return countries;
  }

  getCities() {
    if (this.state.country) {
      let city = countriesCities
        .getCities(this.state.country)
        .map(selectValue => {
          return {
            value: selectValue,
            label: selectValue
          };
        });
      return city;
    }
    return [];
  }

  render() {
    return (
      <div className="MultiDropdown">
        <div>
          <CustomDropdown
            options={this.getCountries()}
            onChange={val => this.onChange(val, "country")}
            value={this.state.country}
          />
        </div>
        <div>
          <CustomDropdown
            options={this.getCities()}
            onChange={val => this.onChange(val, "cities")}
            value={this.state.cities}
          />
        </div>
      </div>
    );
  }
}

MultiDropdown.propTypes = {};
