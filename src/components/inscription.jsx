import * as React from 'react';
import Logo from '../assets/logoApp.png'
import { Link } from 'react-router-dom';

export default function Inscription(){
    return (
        <div className='flex justify-center items-center m-20 p-10 w-full'>
            <div className='bg-white px-8 py-8 rounded-3xl h-full w-1/3 border-2 border-gray-100'>
                <h1 className='text-2xl font-semibold'>Inscription</h1>
                <p className='font-medium text-lg text-gay-500 mt-4'>Completez les informations suivantes pour vous s'inscrire</p>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Nom: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre nom'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Prénom: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre prenom'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Date de naissance: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            type='Date'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Adresse E-mail: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre email'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Votre Adresse: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre adresse exacte'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Numero de telephone: </label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Entrer votre adresse exacte'
                            required
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <label className='font-medium'>Vous êtes un(e):</label>
                        <select className='font-medium w-full border-gray-50 p-4 border-2 rounded-xl mt-1'>
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
                        required
                    />
                </div>
                <div>
                    <label className='font-medium'>Confirmer le Mot de passe: </label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Confirmer votre mot de passe'
                        type="password"
                        required
                    />
                </div>
                <div className='mt-6 justify-between items-center'>
                    <div className='mt-6 flex flex-col gap-y-4'>
                        <button className='bg-green-500 py-3 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl text-white text-lg '>S'inscrire</button>
                    </div>
                    <div className='mt-6 justify-between items-center'>
                        <label className='font-medium'> Vous avez deja un compte?</label>
                        <Link to="/connexion" className='text-green-600 text-base btn-primary font-medium ml-2'>Se connecter</Link>
                    </div>
                </div>   
            </div>
            <div className='hidden lg:flex w-1/4 h-1/4 items-center justify-center bg-white px-10 py-20'>
                <img src={Logo} alt='Logo' />
            </div>
         
        </div>

    )
}