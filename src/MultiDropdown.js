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
      selectedValue1:null,
      selectedValue2:null,
    };
    this.countryOptions = _.map(countriesCities.getCountries(), country => {
      return {
        label: country,
        value: country
      };
    });
  }
  onChange(value) {
    if(value.selectedValue1){
      this.setState({'selectedValue1':value.selectedValue1.value,'selectedValue2':null},()=>{ this.props.onChange(this.state)})
     }
    if(value.selectedValue2){
      this.setState({'selectedValue1':this.state.selectedValue1,'selectedValue2':value.selectedValue2.value},()=>{ this.props.onChange(this.state)})
    }
  }
  render() {
    let citiesForCountry;
    if (this.state.selectedValue1) {
      citiesForCountry=_.map(countriesCities.getCities(this.state.selectedValue1),city=>{
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
           value={this.state.selectedValue1}
           onChange={selectedValue1 => this.onChange({ selectedValue1 })}/>
        </div>
        <div className="city">
           City
          <CustomDropdown  
           options={citiesForCountry}
           value={this.state.selectedValue2} 
           onChange={selectedValue2 => this.onChange({ selectedValue2 })}/>
        </div>
    </div>);
  }
}

MultiDropdown.propTypes = {
  onChange:PropTypes.func,
  city:PropTypes.string,
  country:PropTypes.string,
};
