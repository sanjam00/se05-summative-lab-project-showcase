import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import TeaList from "../components/TeaList"

export default function ShopPage() {
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

  return (
    <div>
      <h1>This is the Shop Page!</h1>
      <p>Here, the products will be displayed.</p>
      <TeaList teas={teas} />
    </div>
  )
}