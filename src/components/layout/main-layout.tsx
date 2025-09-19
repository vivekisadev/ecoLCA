import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header>
        <h1>Life Cycle Assessment PWA</h1>
        <nav>
          {/* Navigation links will go here */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 LCA PWA</p>
      </footer>
    </div>
  );
};

export default MainLayout;
