

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css'; // Add this for styles

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
