import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import Hangman from "./Hangman";
import Nav from "./Nav";
import Instructions from "./Instructions";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Hangman}/>
          <Route exact path="/instructions" component={Instructions}/>
        </Switch>
      </div>
    );
  }
}

export default App;
