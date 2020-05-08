import React from "react";

const SearchForm = ({handleInputChange, handleSubmit}) => {
  return (
    <form className="form my-2 my-lg-0" onChange={handleInputChange} onSubmit={handleSubmit}>
        <h5>Search for a book title:</h5>
      <input
         name="query"
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
