import logo from '../img/logo5.svg';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import banderae from '../img/espana.svg';
import banderai from '../img/inglat.svg';
import { useState } from 'react'; // Importa useState si quieres controlar el estado del menú en React

function MiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Opcional: para controlar el estado en React

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Opcional: función para controlar el estado en React
  };

  return (
    <motion.nav
      className="bg-white shadow-sm fixed-top"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ height: '112px' }}
    >
      <div
        className="mx-auto d-flex align-items-center justify-content-between px-4 w-100"
        style={{ maxWidth: '1512px', height: '100%' }}
      >
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/" style={{ marginLeft: '60px' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '124px', objectFit: 'contain' }}
          />
        </a>

        {/* Menú horizontal (visible en pantallas grandes) */}
        <div className="d-none d-lg-flex justify-content-center flex-grow-1" style={{ color: '#1A428A' }}>
        <ul className="navbar-nav flex-row gap-4" style={{ color: '#1A428A' }}>
            {[
              { href: '#somos', label: 'QUIÉNES SOMOS' },
              { href: '#servicios', label: 'SERVICIOS' },
              { href: '#clientes', label: 'CLIENTES' },
              { href: '#research', label: 'RESEARCH' },
              { href: '#prensa', label: 'EN LA PRENSA' },
              { href: '#contacto', label: 'CONTACTO' }
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a className="nav-link fw-medium text-primary" href={href}>
                    {label}
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Banderas */}
        <div className="d-flex align-items-center gap-2" style={{ marginRight: '40px' }}>
          <img src={banderae} alt="Español" width="30" height="20" />
          <img src={banderai} alt="English" width="30" height="20" />
        </div>

        {/* Botón hamburguesa visible solo en móvil */}
        <button
          className="navbar-toggler border-0 p-0 d-lg-none ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavMobile" // ID para el menú móvil
          aria-controls="navbarNavMobile"
          aria-expanded={isMenuOpen} // Opcional: para controlar el estado en React
          aria-label="Toggle navigation"
          onClick={toggleMenu} // Opcional: para controlar el estado en React
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menú desplegable para móvil */}
      <div className={`collapse navbar-collapse bg-light d-lg-none ${isMenuOpen ? 'show' : ''}`} id="navbarNavMobile">
        <ul className="navbar-nav flex-column align-items-center mt-3 gap-3">
          {[
            { href: '#somos', label: 'QUIÉNES SOMOS' },
            { href: '#servicios', label: 'SERVICIOS' },
            { href: '#clientes', label: 'CLIENTES' },
            { href: '#research', label: 'RESEARCH' },
            { href: '#prensa', label: 'EN LA PRENSA' },
            { href: '#contacto', label: 'CONTACTO' }
          ].map(({ href, label }) => (
            <li className="nav-item" key={href}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a className="nav-link fw-medium text-primary" href={href} onClick={() => setIsMenuOpen(false)}> {/* Cerrar menú al hacer clic (opcional) */}
                  {label}
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default MiNavbar;