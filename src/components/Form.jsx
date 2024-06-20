import * as React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Logo from '../assets/logoApp.png';
=======
>>>>>>> origin/main
import { useState } from 'react';
import axios from 'axios';

export default function Formulaire(){
    const [auth,setAuth] = useState ({
        email:'',
        password:''
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setAuth({
            ...auth,
            [name]: value
        });
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3002/auth', auth).then((response) =>{
            console.log('connexion reussi', response)
        }).catch((error) => {
            console.error('Error registering student:', error);
          })
    }
    return (
<<<<<<< HEAD
        <div  className='flex justify-center items-center m-20 p-10 w-full'>
            <div className='bg-white px-8 py-8 rounded-3xl h-full w-1/4 border-2 border-gray-100'>
                <h1 className='text-3xl font-semibold'>Bienvenue sur BiblioUniv</h1>
                <p className='font-medium text-lg text-gay-500 mt-4'>Entrer vos informations pour vous connectez</p>
                <form onSubmit={handleSubmit}>
                <div className='mt-8'>
                    <div>
                        <label className='text-lg font-medium'>Email: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre nom ou votre email' name='email' value={auth.email} onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className='text-lg font-medium'>Votre mot de passe: </label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Entrer votre mot de passe' name='password' value={auth.password} onChange={handleChange}
                        type="password"
                        required
                    />
                </div>
                <div className='mt-8 justify-between items-center'>
                    <div>
                        <button className='font-medium text-base text-violet-500'>Mot de passe oublié?</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button type='submit' className='bg-blue-500 py-3 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl text-white text-lg '>Se connecter</button>
                    </div>
                </div> 
                </form>           
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Pas encore de compte ?</p>
                        <Link to ="/inscription" className='text-green-600 text-base btn-primary font-medium ml-2'>S'inscrire</Link>
                    </div>
                </div>
            <div className='hidden lg:flex w-1/4 h-1/4 items-center justify-center bg-white px-10 py-20'>
                <img src={Logo} alt='Logo' />
=======
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <form onSubmit={handleSubmit}>
                        <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                            <h2 className="fw-bold mb-2 text-uppercase">BIENVENUE</h2>
                            <p className="text-white-50 mb-5">Entrer votre nom et mot de passe pour se connecter</p>

                            <div data-mdb-input-init className="form-outline form-white mb-4">    
                                <label className="form-label">E-mail</label>
                                <input type="email" id="typeEmailX" name='email' placeholder='Entrer votre adresse mail' value={auth.email} onChange={handleChange} className="form-control form-control-lg" required/>

                            </div>

                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <label className="form-label" >Mot de passe</label>
                                <input type="password" placeholder='Entrer votre mot de passe' name='password' value={auth.password} onChange={handleChange} id="typePasswordX" className="form-control form-control-lg" required />

                            </div>

                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Mot de passe oublié?</a></p>

                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Se connecter</button>
                            </div>

                            <div>
                            <p className="mb-0">Pas encore de compte? <Link to="/inscription" className="text-white-50 fw-bold">S'inscrire</Link>
                            </p>
                            </div>

                        </div>
                        </div>
                    </form>

                </div>
                </div>
>>>>>>> origin/main
            </div>
        </section>

    )
}