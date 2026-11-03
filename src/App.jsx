
import confetti from 'canvas-confetti';
import PlanetScene from './PlanetScene';
import './App.css';

function App() {
  const lanzarConfeti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <PlanetScene />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <h1>Mi proyecto React</h1>
        <p>Escena 3D con Three.js</p>

        <button onClick={lanzarConfeti}>
          ¡Lanzar confeti!
        </button>
      </div>
    </>
  );
}

export default App;
