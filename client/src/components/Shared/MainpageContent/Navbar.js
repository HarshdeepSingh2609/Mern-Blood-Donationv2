

import React from 'react';
import { GiHeartDrop } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar">
      <div className="container-fluid">

        {/* Logo and Title */}
        <div className="d-flex align-items-center">
          <GiHeartDrop className="logo-icon me-2" />
          <span className="navbar-title">LIFEDROP</span>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center nav-menu">
            <li className="nav-item">
              <NavLink to="/mainpage" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>HOME</NavLink>
            </li>
            <li className="nav-item ms-lg-4">
              <NavLink to="/login" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>LOGIN</NavLink>
            </li>
            <li className="nav-item ms-lg-4">
              <NavLink to="/register" className={({ isActive }) => `nav-link nav-underline ${isActive ? 'active-nav' : ''}`}>REGISTER</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

