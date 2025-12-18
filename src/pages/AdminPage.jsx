import NewTeaForm from "../components/NewTeaForm";
import AdminTea from "../components/AdminTea";

export default function AdminPage({ teas, onAddTea, onUpdateTea, onDeleteTea }) {

  return (
    <>
      <h1>This is the Admin Portal Page</h1>
      <p>Here, an admin can edit products</p>
      {/* render a login functionality */}

      <NewTeaForm onAddTea={onAddTea} />

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