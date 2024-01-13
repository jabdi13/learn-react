import { useState } from "react"

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [person, setPerson] = useState({firstName: "Jane", lastName: "Jacobs"})
  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(!isEditing)
  }
  const fullName = person.firstName + ' ' + person.lastName
  function handleEdit(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:{' '}
        {isEditing ? <input name="firstName" onChange={handleEdit} value={person.firstName} /> : <b>{person.firstName}</b>}
      </label>
      <label>
        Apellido:{' '}
        {isEditing ? <input name="lastName" onChange={handleEdit} value={person.lastName} /> : <b>{person.lastName}</b>}
      </label>
      <button type="submit">
        {isEditing ? "Guardar" : "Editar"} Perfil
      </button>
      <p><i>¡Hola, {fullName}!</i></p>
    </form>
  );
}
