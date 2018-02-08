import React, { Component } from "react";
import logo from "./logo.svg";
import MultiDropdown from "./MultiDropdown.js";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country:null,
      city:null
    };
  }
  onChange(val) {
    if(val.country){
      console.log({"selectedValue1":val.country.value,"selectedValue2":null})
      this.setState({country:val.country.value});
      }
    if(val.city){
      console.log({"selectedValue1":this.state.country,"selectedValue2":val.city.value})
      this.setState({city:val.city.value});
      }
  }
  render() {
    return (
      <div className="App">
        <MultiDropdown onChange={val => this.onChange(val)} country={this.state.country} city={this.state.city} />
      </div>
    );
  }
}

export default App;
