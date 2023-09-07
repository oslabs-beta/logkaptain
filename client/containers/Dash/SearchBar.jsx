import React from "react";
import '../../stylesheets/dashboard.css'

const SearchBar = () => {
    return (
        <form className="searchbar">
            <button type="submit">Search</button>
            <input type="text" name="q" placeholder="Search..."></input>
        </form>
    );
};

export default SearchBar