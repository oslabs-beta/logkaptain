import React from "react";
import '../../stylesheets/dashboard.css'
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(""); 

  const handleInput = (e) => {
    e.preventDefault(); 
    setSearchInput(e.target.value); 
  }

  return (
    // <form className="searchbar">
    //   <button type="submit">Search</button>
    //   <input type="text" name="q" placeholder="Search..."></input>
    // </form>
    <input className="searchbar" type = "search" placeholder="Search" onChange={handleInput} value={searchInput} />

  );
};

export default SearchBar