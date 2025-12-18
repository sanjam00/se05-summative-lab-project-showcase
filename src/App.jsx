import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import AdminPage from "./pages/AdminPage"
import NavBar from './components/NavBar'

function App() {
  const [teas, setTeas] = useState([])

  function handleAddTea(newTea) {
    setTeas(prev => [...prev, newTea])
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage teas={teas} setTeas={setTeas} />} />
        <Route path="/admin-portal" element={<AdminPage onAddTea={handleAddTea} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
