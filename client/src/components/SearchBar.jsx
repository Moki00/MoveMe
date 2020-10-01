import React from "react";

const SearchBar = () => {
  return (
    <form className="form-inline">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-append">
          <span className="input-group-text bg-warning" id="basic-addon1">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
