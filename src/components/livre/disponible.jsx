import * as React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Disponible = () => {
    return(
        <div>
            <div className='d-flex column justify-content-around align-items-center'>
                <h3><Link to="/livre" style={{textDecoration: "none"}}>Tous les livres</Link></h3>
                <h1 className='active' >Disponibles</h1>
                <h3><Link to='/livre-nondisponible' style={{textDecoration: "none"}}>Non Disponibles</Link></h3>
            </div>
            <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(4)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='No Cover'/>
                    <Card.Body>
                        <Card.Title>50 Shades of Blue</Card.Title>
                        <Card.Text>
                            Autor: JeuxSui Kon
                            Date: 1980
                            Edition: Hot
                        </Card.Text>
                        <Button variant="success">statut: Dispo</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>
        </div>
    )
}
export default Disponible