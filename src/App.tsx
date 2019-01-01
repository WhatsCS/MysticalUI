import React, { Component } from "react";
import logo from "./logo.svg";
import NavMenu from "./components/Navigation";
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
      </div>
    );
  }
}

export default App;
