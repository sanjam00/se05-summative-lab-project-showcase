import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import AdminPage from "./pages/AdminPage"
import NavBar from './components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin-portal" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
