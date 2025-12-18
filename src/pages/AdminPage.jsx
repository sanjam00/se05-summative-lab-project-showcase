import NewTeaForm from "../components/NewTeaForm";
import AdminTea from "../components/AdminTea";

export default function AdminPage({ teas, onAddTea, onUpdateTea, onDeleteTea }) {

  return (
    <>
      <h1>Admin Portal</h1>
      {/* render a login functionality */}
      <p>code a login functionality? a blank username and password field, submitting it takes you to the edit pages</p>

      <NewTeaForm onAddTea={onAddTea} />

      <h3>Edit or delete a product:</h3>

      {teas.map(tea => (
        <AdminTea
          key={tea.id}
          tea={tea}
          onUpdateTea={onUpdateTea}
          onDeleteTea={onDeleteTea}
        />
      ))}
    </>
  )
}