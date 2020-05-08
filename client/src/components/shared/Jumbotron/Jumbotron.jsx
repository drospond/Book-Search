import React from "react";
import "./Jumbotron.css"

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Book Search!</h1>
        <h2 className="lead">
          Search for and save books of interest
        </h2>
      </div>
    </div>
  );
};

export default Jumbotron;
