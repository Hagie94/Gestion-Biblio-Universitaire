import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Alluser = () => {
    return(
        <div>

            <hr /><h3>Les étudiants:</h3> <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(7)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='Tsisy Sary p*** eh'/>
                    <Card.Body>
                        <Card.Title>Anaran'le etudiants</Card.Title>
                        <Card.Text>
                            Mail: johndoe@gmail.com
                            Date de naissance: 20-06-02
                        </Card.Text>
                        <Button variant="warning">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>
            <hr /><h3>Personnelles:</h3> <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(7)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='Tsisy Sary p*** eh'/>
                    <Card.Body>
                        <Card.Title>Anaran'le etudiants</Card.Title>
                        <Card.Text>
                            Mail: johndoe@gmail.com
                            Date de naissance: 20-06-02
                        </Card.Text>
                        <Button variant="warning">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>
            <hr /><h3>Autres:</h3> <hr />
            <div className='d-flex flex-wrap row justify-content-around align-items-center'>
            {[...Array(7)].map((i) => (
                <Card key={i} style={{ width: '10rem', height: "auto" }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt='Tsisy Sary p*** eh'/>
                    <Card.Body>
                        <Card.Title>Anaran'le etudiants</Card.Title>
                        <Card.Text>
                            Mail: johndoe@gmail.com
                            Date de naissance: 20-06-02
                        </Card.Text>
                        <Button variant="warning">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </Card.Body>
                </Card> 
            ))}
            </div>
        </div>
    )
}
export default Alluser