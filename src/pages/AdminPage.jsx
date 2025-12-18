import NewTeaForm from "../components/NewTeaForm";

export default function AdminPage({ onAddTea, props }) {
  return (
    <>
      <h1>This is the Admin Portal Page</h1>
      <p>Here, an admin can edit products</p>
      {/* render a login functionality */}
      {/* render the new tea form */}
      <NewTeaForm onAddTea={onAddTea} />
    </>
  )
}