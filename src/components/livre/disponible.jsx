import * as React from 'react';
import {Link} from 'react-router-dom';

const Disponible = () => {
    return(
        <div>
            <div className='d-flex column justify-content-around align-items-center'>
                <h3><Link to="/livre" style={{textDecoration: "none"}}>Tous les livres</Link></h3>
                <h1 className='active' >Disponibles</h1>
                <h3><Link to='/livre-nondisponible' style={{textDecoration: "none"}}>Non Disponibles</Link></h3>
            </div>
            <div>
                <h1 style={{color: "red"}}>Aucun disponible pour le moment</h1>
            </div>
        </div>
    )
}
export default Disponible