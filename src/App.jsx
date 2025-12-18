import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import AdminPage from "./pages/AdminPage"
import NavBar from './components/NavBar'

function App() {
  const [teas, setTeas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/tea")
      .then(r => {
        if (!r.ok) { throw new Error("Failed to fetch") }
        return r.json();
      })
      .then(data => {
        console.log(data)
        setTeas(data)
      })
      .catch(error => console.log("Fetch request failed:", error))
  }, [])

  function handleAddTea(newTea) {
    setTeas(prev => [...prev, newTea])
  }

  function updateTea(updatedTea) {
    setTeas(prev =>
      prev.map(tea => tea.id === updatedTea.id ? updatedTea : tea)
    )
  }

  function deleteTea(id) {
    setTeas(prev => prev.filter(tea => tea.id !== id))
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage teas={teas} setTeas={setTeas} />} />
        <Route path="/admin-portal" element={<AdminPage teas={teas} onAddTea={handleAddTea} onUpdateTea={updateTea} onDeleteTea={deleteTea} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
