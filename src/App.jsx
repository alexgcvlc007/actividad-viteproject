
import PlanetScene from './PlanetScene';
import './App.css';

function App() {
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
      </div>
    </>
  );
}

export default App;
