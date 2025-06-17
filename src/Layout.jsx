import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Williams Racing</div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca de</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Derechos Reservados © 2025 - Tributo a Williams Racing</p>
      </footer>
    </>
  );
};

export default Layout;
