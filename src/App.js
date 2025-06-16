import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
  return (
    <section className="home">
      <h1 className="titulo">Bienvenidos a Williams Racing Tribute</h1>
      <p className="descripcion">
        Una leyenda británica en la Fórmula 1. Conoce la historia, los pilotos y los momentos inolvidables de Williams Racing.
      </p>

      <div className="cards">
        <div className="card">
          <img
            src="https://www.snaplap.net/wp-content/uploads/2017/04/williams-fw19-museum.jpg"
            alt="Williams FW19"
          />
          <h3>Glorias del pasado</h3>
          <p>Campeones como Nigel Mansell, Alain Prost y Jacques Villeneuve marcaron época con Williams.</p>
        </div>

        <div className="card">
          <img
            src="https://fuelcarmagazine.com/wp-content/uploads/2022/02/Williams-FW44-2022.jpg"
            alt="Monoplaza moderno"
          />
          <h3>Evolución técnica</h3>
          <p>Desde motores Renault V10 hasta la era híbrida: un equipo en constante innovación.</p>
        </div>

        <div className="card">
          <img
            src="https://variety.com/wp-content/uploads/2023/07/Nigel-Mansell-Red-5.jpg?w=1000&h=563&crop=1"
            alt="Nigel Mansell"
          />
          <h3>Pilotos icónicos</h3>
          <p>Mansell, Hill, Rosberg, Bottas y Russell: pilotos que llevaron el espíritu de Williams a lo más alto.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h2 className="titulo">Acerca de Williams Racing</h2>
      <p className="descripcion">
        Fundado en 1977 por Frank Williams y Patrick Head, Williams Racing es uno de los equipos más exitosos de la historia de la Fórmula 1.
        Con 9 campeonatos de constructores y 7 de pilotos, su legado está lleno de innovación, velocidad y gloria británica.
      </p>
      <img
        src="https://e0.365dm.com/21/11/768x432/skysports-sir-frank-williams_5598611.jpg?20211128171651"
        alt="Sir Frank Williams"
        className="about-image"
      />
    </section>
  );
}

function App() {
  return (
    <BrowserRouter basename="/u2_p4_desWebIntegral">
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
