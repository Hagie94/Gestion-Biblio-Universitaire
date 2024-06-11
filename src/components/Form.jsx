import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoApp.png';
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
            </div>
        </div>

    )
}