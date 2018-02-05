import React, { Component } from "react";
import PropTypes from "prop-types";
import * as countriesCities from "countries-cities";
import "./MultiDropdown.css";
import _ from "lodash";
import CustomDropdown from "./CustomDropdown";
export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = (
      {
        "selectedValue1":null,
        "selectedValue2":null,
      }
    );
  }
  onChange(selecetedValue,selectedElement) {
    if(selecetedValue){
      selecetedValue = selecetedValue.value;
      if(selectedElement == "selectedValue1"){
        this.setState({selectedValue1:selecetedValue});
        this.setState({selectedValue2:null});
      }
      else if(selectedElement == "selectedValue2"){
        this.setState({selectedValue2:selecetedValue});
      }
    }
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
    this.state.selectedValue1 && this.props.onChange(this.state) 
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