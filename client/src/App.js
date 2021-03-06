import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SavedBooks from "./containers/SavedBooks";
import SearchBooks from "./containers/SearchBooks";
import Navbar from "./components/shared/Navbar";
import Jumbotron from "./components/shared/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Jumbotron/>
        <Switch>
          <Route exact path="/(|saved)">
            <SavedBooks/>
          </Route>
          <Route exact path="/search"> 
            <SearchBooks/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
