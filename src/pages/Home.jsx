import TareaCard from '../components/TareaCard'
import FormularioTarea from '../components/FormularioTarea'
import '../styles/Home.css'
import { useState } from 'react'

function Home() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Aprender React', descripcion: 'Estudiar componentes y props', completada: false },
    { id: 2, titulo: 'Hacer proyecto', descripcion: 'Crear una aplicación con Vite', completada: true },
    { id: 3, titulo: 'Repasar Git', descripcion: 'Practicar commits y ramas', completada: false },
  ])

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now(), completada: false }])
  }

  return (
    <div className="home">
      <h2>Mis Tareas</h2>
      <FormularioTarea onAgregar={agregarTarea} />
      <div className="tareas-lista">
        {tareas.map((tarea) => (
          <TareaCard
            key={tarea.id}
            titulo={tarea.titulo}
            descripcion={tarea.descripcion}
            completada={tarea.completada}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
