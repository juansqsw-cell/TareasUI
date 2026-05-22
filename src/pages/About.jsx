import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <h2>Sobre el Proyecto</h2>
      <p>
        Esta es una aplicación de demostración para la actividad de Git y React.
        El proyecto utiliza Vite como bundler y React con componentes funcionales.
      </p>
      <h3>Características</h3>
      <ul>
        <li>Gestión de tareas con estado dinámico</li>
        <li>Componentes reutilizables con props</li>
        <li>Estilos CSS modulares</li>
        <li>Enrutamiento entre páginas</li>
      </ul>
    </div>
  )
}

export default About
