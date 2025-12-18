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
    <div>
      <h1>This is the Shop Page!</h1>
      <p>Here, the products will be displayed (done). There will be a search and sort function.</p>
      <SearchBar handleSearch={handleSearch} searchInput={searchInput} />
      <TeaList teas={filteredTeas} />
    </div>
  )
}