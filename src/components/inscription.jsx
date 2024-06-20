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
<<<<<<< HEAD
        <div className='flex justify-center items-center m-20 p-10 w-full'>
            <div className='bg-white px-8 py-8 rounded-3xl h-full w-1/3 border-2 border-gray-100'>
                <h1 className='text-2xl font-semibold'>Inscription</h1>
                <p className='font-medium text-lg text-gay-500 mt-4'>Completez les informations suivantes pour vous s'inscrire</p>
                <form onSubmit={handleSubmit}>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Nom: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre nom' name='name' value={formData.name} onChange={handleChange} 
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Prénom: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre prenom' name='last_name' value={formData.last_name} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Date de naissance: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            type='Date'  name='birthday' value={formData.birthday} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Adresse E-mail: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre email' name='email' value={formData.email} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Votre Adresse: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre adresse exacte' name='address' value={formData.address} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Numero de telephone: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre numero' name='phone' value={formData.phone} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Vous êtes un(e):</label>
                        <select className='font-medium w-full border-gray-50 p-4 border-2 rounded-xl mt-1' name='category' onChange={handleChange}>
                            <option value="Etudiant">Etudiant</option>
                            <option value="Professeur">Professeur</option>
                            <option value="Personnel">Personnel</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className='font-medium'>Mot de passe: </label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Entrer votre mot de passe'
                        type="password"  
                        name='password'
                        value={formData.password} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className='font-medium'>Confirmer le Mot de passe: </label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Confirmer votre mot de passe'
                        type="password" name='confirmPassword'
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className='text-red-500 mt-4'>{error}</p>}
                    <div className='mt-6 flex flex-col gap-y-4'>
                        <button type='submit' className='bg-green-500 py-3 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl text-white text-lg '>S'inscrire</button>

                    </div>
                </form>
                <div className='mt-6 justify-between items-center'>       
                    <div className='mt-6 justify-between items-center'>
                        <label className='font-medium'> Vous avez deja un compte?</label>
                        <Link to="/connexion" className='text-green-600 text-base btn-primary font-medium ml-2'>Se connecter</Link>
                    </div>
                </div>   
=======
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-uppercase">S'inscrire</h2>
                                <p className="text-white-50 mb-5">Veuillez completer les informations suivantes pour s'inscrire</p>

                                <div data-mdb-input-init className="form-outline form-white mb-4"> 
                                    <label className="form-label" >Nom</label>
                                    <input type="email" placeholder='Entrer votre nom' name='name' value={formData.name} onChange={handleChange}  className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Prénom</label>
                                    <input type="email" placeholder='Entrer votre prenom' name='last_name' value={formData.last_name} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Date de naissance</label>
                                    <input type="date" name='birthday' value={formData.birthday} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Adresse mail</label>
                                    <input type="email" placeholder='Entrer votre email' name='email' value={formData.email} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">votre Adresse</label>
                                    <input type="email"  placeholder='Entrer votre adresse exacte' name='address' value={formData.address} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Numéro de téléphone</label>
                                    <input type="email" placeholder='Entrer votre numero' name='phone' value={formData.phone} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Vous êtes un(e):</label>
                                    <select className='form-control form-control-lg' name='category' onChange={handleChange}>
                                        <option value="Etudiant">Etudiant</option>
                                        <option value="Professeur">Professeur</option>
                                        <option value="Personnel">Personnel(le)</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>

                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Mot de passe</label>
                                    <input type="password" placeholder='Votre mot de passe' name='password' value={formData.password} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <label className="form-label">Confirmer votre Mot de passe</label>
                                    <input type="password" placeholder='Confirmer votre mot de passe' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className="form-control form-control-lg" required />
                                </div>
                                {error && <p className='text-red-500 mt-4'>{error}</p>}
                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">S'inscrire</button>
                                </div>

                                <div>
                                <p className="mb-0">Vous avez déja un compte? <Link to="/connexion" className="text-white-50 fw-bold">Se connecter</Link>
                                </p>
                                </div>

                            </div>      
                        </form>
                    </div>
                </div>
                </div>
>>>>>>> origin/main
            </div>
        </section>

    )
}