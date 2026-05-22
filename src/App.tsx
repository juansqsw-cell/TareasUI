import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  const [pagina, setPagina] = useState('home')

  return (
    <>
      <Navbar titulo="Gestión de Tareas" />
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem 2rem', background: '#f0f0f0' }}>
        <button onClick={() => setPagina('home')} style={btnStyle(pagina === 'home')}>
          Home
        </button>
        <button onClick={() => setPagina('about')} style={btnStyle(pagina === 'about')}>
          About
        </button>
      </nav>
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        {pagina === 'home' ? <Home /> : <About />}
      </main>
      <Footer />
    </>
  )
}

function btnStyle(activo: boolean) {
  return {
    padding: '0.5rem 1.2rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 600,
    background: activo ? '#1a1a2e' : '#fff',
    color: activo ? '#fff' : '#1a1a2e',
    borderBottom: activo ? '2px solid #1a1a2e' : '2px solid transparent',
  }
}

export default App
