import * as React from 'react';
import {Link} from 'react-router-dom';

const Nondisponible = () => {
    return(
        <div>
            <div className='d-flex column justify-content-around align-items-center'>
                <h3><Link to="/livre" style={{textDecoration: "none"}}>Tous les livres</Link></h3>
                <h3><Link to="/livre-disponible" style={{textDecoration: "none"}}>Disponibles</Link></h3>
                <h1 className='active' >Non Disponibles</h1>
            </div>
            <div>
                <h1 style={{color: "Red"}}>Aucun pour l'instant </h1>
            </div>
        </div>
    )
}
export default Nondisponible