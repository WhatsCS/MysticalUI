import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/Navigation";
import Gallery from "./components/Gallary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Gallery />
      </div>
    );
  }
}

export default App;
