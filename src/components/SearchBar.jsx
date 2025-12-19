import { useState } from "react"

export default function SearchBar({ handleSearch, searchInput, props }) {

  return (
    <div className="search-bar-container">
      <input
        id="searchBar"
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  )
}