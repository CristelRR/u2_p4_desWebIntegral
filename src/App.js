import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
  return (
    <div>
      <h1 className="titulo">Bienvenidos a la Página de Inicio</h1>
      <p className="descripcion">Esta es una aplicación React...</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="titulo">Acerca de Nosotros</h2>
      <p className="descripcion">Somos un equipo dedicado al desarrollo web moderno.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;