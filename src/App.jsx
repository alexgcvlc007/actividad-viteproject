
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Mi proyecto React</h1>
          <p>Prueba el componente canvas-confetti</p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => {
            confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 }
            })
          }}
        >
          Lanzar confeti
        </button>
      </section>
    </>
  )
}

export default App
