import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false)
    const handleCLick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    return (
        <>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            Inicio
        </Link>
        <div className='menu-icon' onClick={handleCLick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
                <Link to='/usuarios' className='nav-links' onClick={closeMobileMenu}>
                    Usuarios
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/roles' className='nav-links' onClick={closeMobileMenu}>
                    Roles
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/productos' className='nav-links' onClick={closeMobileMenu}>
                    Productos
                </Link>
            </li>
        </ul>
        </nav>
        </>
    );
}

export default Navbar;