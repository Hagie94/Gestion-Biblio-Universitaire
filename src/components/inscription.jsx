import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';


export default function Inscription(){
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
        birthday: '',
        category: '',
        password: '',
      });
      
      const [error, setError] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      
      const validatePasswords = () => {
        return formData.password === formData.confirmPassword;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('tafiditra');
        if (!validatePasswords()) {
            setError('Les mots de passe ne correspondent pas');
            return;
          }
          setError('');
        console.log('tafiditra');
        await axios.post('http://localhost:3002/students', formData).then((response) =>{
            console.log('Student registered successfully:', response.data);
            if (response.data) {
                window.location.pathname = "/connexion"; 
              } else {
                console.log('Student registration successful (single element).');
              }
        })
        .catch((error) => {
          console.error('Error registering student:', error);
        })
        console.log('tafiditra');
      };
    
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                        <form onSubmit={handleSubmit}>
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">S'inscrire</h2>
                                <p class="text-white-50 mb-5">Veuillez completer les informations suivantes pour s'inscrire</p>

                                <div data-mdb-input-init class="form-outline form-white mb-4"> 
                                    <label class="form-label" >Nom</label>
                                    <input type="email" placeholder='Entrer votre nom' name='name' value={formData.name} onChange={handleChange}  class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Prénom</label>
                                    <input type="email" placeholder='Entrer votre prenom' name='last_name' value={formData.last_name} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Date de naissance</label>
                                    <input type="date" name='birthday' value={formData.birthday} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Adresse mail</label>
                                    <input type="email" placeholder='Entrer votre email' name='email' value={formData.email} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">votre Adresse</label>
                                    <input type="email"  placeholder='Entrer votre adresse exacte' name='address' value={formData.address} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Numéro de téléphone</label>
                                    <input type="email" placeholder='Entrer votre numero' name='phone' value={formData.phone} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typeEmailX">Vous êtes un(e):</label>
                                    <select className='form-control form-control-lg' name='category' onChange={handleChange}>
                                        <option value="Etudiant">Etudiant</option>
                                        <option value="Professeur">Professeur</option>
                                        <option value="Personnel">Personnel(le)</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>

                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typePasswordX">Mot de passe</label>
                                    <input type="password" placeholder='Votre mot de passe' name='password' value={formData.password} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <label class="form-label" for="typePasswordX">Confirmer votre Mot de passe</label>
                                    <input type="password" placeholder='Confirmer votre mot de passe' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} class="form-control form-control-lg" required />
                                </div>
                                {error && <p className='text-red-500 mt-4'>{error}</p>}
                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">S'inscrire</button>
                                </div>

                                <div>
                                <p class="mb-0">Vous avez déja un compte? <Link to="/connexion" class="text-white-50 fw-bold">Se connecter</Link>
                                </p>
                                </div>

                            </div>      
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}