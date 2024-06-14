import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const AllBooks = () => {
    return(
        <div>
            <div className='d-flex column justify-content-around align-items-center'>
                <h1>Tous les livres</h1>
                <h3><Link to='/livre-disponible' style={{textDecoration: "none"}}>Disponibles</Link></h3>
                <h3><Link to="/livre-nondisponible" style={{textDecoration: "none"}}>Non Disponibles</Link></h3>
            </div>
            <hr />
            <h3>Romance:</h3> <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(5)].map((i) => (
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
            <hr />
            <h3>Erotique</h3> <hr />
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
            <hr />
            <h3>Sci-Fi: </h3>
            <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(3)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='No Cover'/>
                    <Card.Body>
                        <Card.Title>AFTER MY MARIAGE</Card.Title>
                        <Card.Text>
                            Autor: Tahina
                            Date: 1995
                            Edition: fantastic
                        </Card.Text>
                        <Button variant="success">statut: Dispo</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>

        </div>
    )
}
export default AllBooks