import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">THELOGO</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/livre" className="nav-link">
              Livres
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/alluser" className="nav-link">
              Utilisateur
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ajoutlivre" className="nav-link">
              Ajout d'un nouveau livre
            </Link>
          </li>
        </ul>
        {/* Search bar section */}
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item d-flex align-items-center">
            <input
              type="text"
              className="form-control form-control-sm mr-2"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {/* Implement search functionality here based on searchTerm */}
          </li>
        </ul>
        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item">
            <Link to="/connexion" className="nav-link">
              <i className="bi bi-box-arrow-right"></i> Se connecter
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inscription" className="nav-link">
              S'inscrire
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
