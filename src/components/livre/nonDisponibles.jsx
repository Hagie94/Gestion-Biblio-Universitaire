import * as React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Nondisponible = () => {
    return(
        <div>
            <div className='d-flex column justify-content-around align-items-center'>
                <h3><Link to="/livre" style={{textDecoration: "none"}}>Tous les livres</Link></h3>
                <h3><Link to="/livre-disponible" style={{textDecoration: "none"}}>Disponibles</Link></h3>
                <h1 className='active' >Non Disponibles</h1>
            </div>
            <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(10)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='No Cover'/>
                    <Card.Body>
                        <Card.Title>Another Motherfucking day</Card.Title>
                        <Card.Text>
                            Autor: Who cares
                            Date: 1995
                            Edition: Life Sucks
                        </Card.Text>
                        <Button variant="danger">statut: Non Dispo</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>
            
        </div>
    )
}
export default Nondisponible