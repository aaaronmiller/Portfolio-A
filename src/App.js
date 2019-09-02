import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Animation from "./Components/Animation";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Animation />
 
        <Section
          title="About"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Portfolio"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Boogers"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
