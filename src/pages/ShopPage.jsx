import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import TeaList from "../components/TeaList"
import SearchBar from "../components/SearchBar"

export default function ShopPage({ teas, setTeas }) {
  const [searchInput, setSearchInput] = useState("")

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  const filteredTeas = teas.filter(tea =>
    tea.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="shop-container">
      <SearchBar handleSearch={handleSearch} searchInput={searchInput} />
      <TeaList teas={filteredTeas} />
    </div>
  )
}