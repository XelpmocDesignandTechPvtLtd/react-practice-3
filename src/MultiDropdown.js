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
      country:null,
      city:null,
    };
    this.countryOptions = _.map(countriesCities.getCountries(), country => {
      return {
        label: country,
        value: country
      };
    });
  }
  onChange(value) {
    if(this.props.onChange){
    this.props.onChange(value);
    }
  }
  render() {
    let citiesForCountry;
    if (this.props.country) {
      citiesForCountry=_.map(countriesCities.getCities(this.props.country),city=>{
        return{
          label:city,
          value:city
        };
      });
    }
    return (
       <div className="MultiDropdown">
       <div className="country">
         Country
           <CustomDropdown 
           options={this.countryOptions}
           value={this.props.country}
           onChange={country => this.onChange({ country })}/>
        </div>
        <div className="city">
           City
          <CustomDropdown  
           options={citiesForCountry}
           value={this.props.city} 
           onChange={city => this.onChange({ city })}/>
        </div>
    </div>);
  }
}

MultiDropdown.propTypes = {
  onChange:PropTypes.func,
  city:PropTypes.string,
  country:PropTypes.string,
};
