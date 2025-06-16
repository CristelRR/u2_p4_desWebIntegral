import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f3e8ff', minHeight: '100vh' }}>
      <header style={{ padding: '15px', backgroundColor: '#a855f7', color: '#fff' }}>
        <nav style={{ display: 'flex', gap: '15px', fontSize: '18px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}> Inicio</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
        </nav>
      </header>

      <main style={{ padding: '30px' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '15px', backgroundColor: '#a855f7', color: '#fff', textAlign: 'center' }}>
        <p>Derechos Reservados © 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
