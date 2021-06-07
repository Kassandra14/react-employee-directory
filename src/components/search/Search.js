import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";

// { props }
function Search({ search, handleFormSubmit, handleInputChange }) {
  return (
    // form
    <form>
      <div className="form-group">
        <Navbar />
        <label className="monospace">
          Click heading arrows to sort, or narrow results with the searchbox.
        </label>
        <div className="inputContainer">
          <input
            // {search} handles the search value
            value={search}
            onChange={handleInputChange}
            name="search"
            type="search"
            className="Field"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;