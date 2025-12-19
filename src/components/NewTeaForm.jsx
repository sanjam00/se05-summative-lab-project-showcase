import { useId, useState } from "react"

export default function NewTeaForm({ onAddTea, props }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    caffeinated: false,
    price: "",
  })

  function handleChange(e) {
    const { name, type, value, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/tea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (!r.ok) { throw new Error("Post request failed") }
        return r.json()
      })
      .then(newTea => {
        console.log(newTea)
        onAddTea(newTea)
        setFormData({
          id: "",
          name: "",
          image: "",
          description: "",
          caffeinated: false,
          price: "",
        })
      })
      .catch(error => console.log("Fetch request failed:", error))
  }

  return (
    <div className="new-tea-form-container">
      <h3>Add a new product:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" type="textbox" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="image-input">Image:</label>
        <input id="image-input" type="textbox" name="image" value={formData.image} onChange={handleChange} />

        <label htmlFor="description-input">Description:</label>
        <input id="description-input" type="textbox" name="description" value={formData.description} onChange={handleChange} />

        <div className="checkbox-row">
          <label htmlFor="caffeinated-checkbox">Caffeinated:</label>
          <input id="caffeinated-checkbox" type="checkbox" name="caffeinated" checked={formData.caffeinated} onChange={handleChange} />
        </div>

        <label htmlFor="price-input">Price:</label>
        <input id="price-input" type="textbox" name="price" value={formData.price} onChange={handleChange} />

        <button type="submit" id="newTeaSubmit">Submit</button>
      </form>
    </div>

  )
}