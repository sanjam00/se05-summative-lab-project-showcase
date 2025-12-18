export default function NewTeaForm() {
  return (
    <form>
      <label htmlFor="name-input">Name:</label>
      <input id="name-input" type="textbox" />

      <label htmlFor="image-input">Image:</label>
      <input id="image-input" type="textbox" />

      <label htmlFor="description-input">Description:</label>
      <input id="description-input" type="textbox" />

      <label htmlFor="caffeinated-checkbox">Caffeinated:</label>
      <input id="caffeinated-checkbox" type="checkbox" />

      <label htmlFor="price-input">Price:</label>
      <input id="price-input" type="textbox" />

      <button>Submit</button>
    </form>
  )
}