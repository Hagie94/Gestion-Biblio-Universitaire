import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <ul>
                <li><NavLink to='/dashboard/livre'>Livre</NavLink></li>
                <li><NavLink to='/dashboard/alluser'>alluser</NavLink></li>
                <li><NavLink to='/inscription'>Inscription</NavLink></li>
                <li><NavLink to='/connexion'>Connexion</NavLink></li>
            </ul>
        </header>
    )
}
export default Header