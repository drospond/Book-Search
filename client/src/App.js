import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SavedBooks from "./containers/SavedBooks";
import SearchBooks from "./containers/SearchBooks";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
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
