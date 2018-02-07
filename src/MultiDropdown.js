import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import CustomDropdown from "./CustomDropdown";
export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state ={
        "selectedValue1":null,
        "selectedValue2":null,
      }
  }
  onChange(selectedValue,selectedElement) {
    if(selectedValue){
      if(selectedElement == "selectedValue1"){
        this.onCountryChange(selectedValue.value);
      }
      else if(selectedElement == "selectedValue2"){
        this.onCityChange(selectedValue.value);
      }
    }
  }
  clearValue (e) {
		this.select.setInputValue('');
	}
  onCountryChange(selectedValue1){
    this.setState({selectedValue1,selectedValue2:null});
    this.props.onChange({selectedValue1,selectedValue2:null})
  }
  onCityChange(selectedValue2){
    this.setState({selectedValue2});
    this.props.onChange({selectedValue1:this.state.selectedValue1,selectedValue2})
  }
  getCities(){
    if(this.state.selectedValue1){
      let cityNames = countriesCities.getCities(this.state.selectedValue1).map(defaultValue=>{
        return {
          value:defaultValue,
          label:defaultValue
        }
      });
      return cityNames;
    }
    return [];
  }
  getCountries(){
    let countryNames = countriesCities.getCountries().map(defaultValue=>{
      return {
        value:defaultValue,
        label:defaultValue
      }
    });
    return countryNames;
  }
  render() {
    return (
            <div className="MultiDropdown">
              <div className="MultiDropdown-dropdown">
                  <div className="MultiDropdown-label">Country:</div>
                  <CustomDropdown 
                                  options={this.getCountries()} 
                                  onChange={event=>this.onChange(event,"selectedValue1")} 
                                  value={this.state.selectedValue1}
                                  clearable={true}/>
              </div>
              <div className="MultiDropdown-dropdown">
                <div className="MultiDropdown-label">City:</div>
                  <CustomDropdown 
                                  options={this.getCities()} 
                                  onChange={event=>this.onChange(event,"selectedValue2")} 
                                  value={this.state.selectedValue2}
                                  clearable={true}/>
              </div>
            </div>
    );
  }
}

MultiDropdown.propTypes = {
  onChange: PropTypes.func,
};
MultiDropdown.defaultProps = {
  onChange: () => {},
}