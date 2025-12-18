import { useState } from "react"

export default function SearchBar({ handleSearch, searchInput, props }) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  )
}