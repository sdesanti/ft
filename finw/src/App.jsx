import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext'; 

import MiNavbar from './components/MiNavbar';
import Footer from './components/Footer';

import Somos from './pages/Somos';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import Research from './pages/Research';
import Prensa from './pages/Prensa';
import Login from './pages/Login';
import RutaPrivada from './components/RutaPrivada';
import Admin from './pages/Admin';
import EditarPrensa from './pages/EditarPrensa';
import EditarResearch from './pages/EditarResearch';


import plantas from './img/flores2.png';

function Home() {
  return (
    <div className="inter">
      <MiNavbar />
      <div className="contenido-flex-home" id="home">
        <img
          src={plantas}
          width="249"
          height="792"
          alt="plantas"
          className="imagen-izquierda"
        />
        <div className="texto-home">
          <h1 className='titulo-home'>Tailor</h1>
          <h2 className='subtitulo-home'>Economía y Finanzas</h2>
        </div>
      </div>
      <div className="separador-azul"></div>
      <section id="somos"><Somos /></section>
      <section id="servicios"><Servicios /></section>
      <section id="clientes"><Clientes /></section>
      <section id="research"><Research /></section>
      <section id="prensa"><Prensa /></section>
      <section id="contacto"><Contacto /></section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      {/* ELIMINA ESTO: <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RutaPrivada>
                <Admin />
              </RutaPrivada>
            }
          />
          <Route
            path="/admin/research"
            element={
              <RutaPrivada>
                <EditarResearch />
              </RutaPrivada>
            }
          />
          <Route
            path="/admin/prensa"
            element={
              <RutaPrivada>
                <EditarPrensa />
              </RutaPrivada>
            }
          />
        </Routes>
    </AuthProvider>
  );
}

export default App;