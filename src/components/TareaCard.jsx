import '../styles/TareaCard.css'

function TareaCard({ titulo, descripcion, completada }) {
  return (
    <div className={`tarea-card ${completada ? 'completada' : ''}`}>
      <h3 className="tarea-titulo">{titulo}</h3>
      <p className="tarea-descripcion">{descripcion}</p>
      <span className="tarea-estado">
        {completada ? '✅ Completada' : '⏳ Pendiente'}
      </span>
    </div>
  )
}

export default TareaCard
