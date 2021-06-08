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
          Click column headings to sort by that value:
        </label>
        <div className="inputContainer">
          {/* <input
            // {search} handles the search value
            value={search}
            onChange={handleInputChange}
            name="search"
            type="search"
            className="Field"
            placeholder="Search"
            id="search"
          /> */}
        </div>
      </div>
    </form>
  );
}

export default Search;