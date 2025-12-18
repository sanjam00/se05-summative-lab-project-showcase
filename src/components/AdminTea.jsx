import { useState } from "react"

export default function AdminTea({ tea, onUpdateTea, onDeleteTea }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(tea)

  function handleDelete() {
    fetch(`http://localhost:3001/tea/${tea.id}`, {
      method: "DELETE"
    })
      .then(() => {
        onDeleteTea(tea.id)
        console.log("Successfully deleted item")
      })
      .catch(error => console.log("Fetch request failed:", error))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/tea/${tea.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (!r.ok) { throw new Error(`Failed to update tea: ${r.status}`) }
        return r.json()
      })
      .then(updatedTea => {
        onUpdateTea(updatedTea)
        setIsEditing(false)
      })
      .catch(error => console.log("Fetch request failed:", error))
  }

  function handleChange(e) {
    const { name, type, value, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  if (isEditing) {
    return (
      <>
        <h5>Edit {tea.name}</h5>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="edit-caffeinated">Caffeinated:</label>
          <input
            id="edit-caffeinated"
            type="checkbox"
            name="caffeinated"
            checked={formData.caffeinated}
            onChange={handleChange}
          />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <button id="edit-button">Submit Changes</button>
        </form>
      </>
    )
  }

  return (
    <div>
      <p>{tea.name}</p>
      <button onClick={() => setIsEditing(true)}>Edit Tea</button>
      <button onClick={handleDelete}>Delete Tea</button>
    </div>
  )
}