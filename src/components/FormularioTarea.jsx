import { useState } from 'react'
import '../styles/FormularioTarea.css'

function FormularioTarea({ onAgregar }) {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!titulo.trim() || !descripcion.trim()) return
    onAgregar({ titulo, descripcion })
    setTitulo('')
    setDescripcion('')
  }

  return (
    <form className="formulario-tarea" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  )
}

export default FormularioTarea
