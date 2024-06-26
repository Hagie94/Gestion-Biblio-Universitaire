import * as React from 'react';
import { NavLink, Link} from 'react-router-dom';

export default function Header() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">THELOGO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav " style={{alignItems: "right"}}>
            <li className="nav-item">
              <NavLink to='/livre' className="nav-link">Livres</NavLink>
            </li>
            <li className="nav-item">
              <Link to='/alluser' className="nav-link">Utilisateur</Link>
            </li>
            <li className="nav-item">
              <Link to='/ajoutlivre' className="nav-link">Ajout d'un nouveau livre</Link>
            </li>
        </ul>
        <ul className='navbar-nav' style={{float: "right", marginLeft: "auto"}}>
        <li className="nav-item">
              <Link to='/connexion' className="nav-link"> <i class="bi bi-box-arrow-right"></i>Se connecter</Link>
            </li>
            <li className="nav-item">
              <Link to='/inscription' className="nav-link">S'inscrire</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}