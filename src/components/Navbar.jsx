import '../styles/Navbar.css'

function Navbar({ titulo }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-titulo">{titulo}</h1>
    </nav>
  )
}

export default Navbar
