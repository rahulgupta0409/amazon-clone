"use client";
import React from "react";
import "./search.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form id="form" role="search">
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search..."
          aria-label="Search through site content"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
