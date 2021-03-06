import React, { Component } from "react";
import logo from "./logo.svg";
import MultiDropdown from "./MultiDropdown.js";
import "./App.css";

class App extends Component {
  onChange(val) {
    console.log(val);
  }
  render() {
    return (
      <div className="App">
        <MultiDropdown onChange={val => this.onChange(val)} />
      </div>
    );
  }
}

export default App;
