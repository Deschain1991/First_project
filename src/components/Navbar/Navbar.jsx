import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';
const Navbar = () => {
    return <nav className='nav'>
        <div className='nav__item'>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className='nav__item'>
            <NavLink to='/dialogs'>Masseges</NavLink>
        </div>
        <div className='nav__item'>
            <NavLink to='/News'>News</NavLink>
        </div>
        <div className='nav__item'>
            <NavLink to='/Music'>Music</NavLink>
        </div>
        <div className='nav__item'>
            <NavLink to='/Settings'>Settings</NavLink>
        </div>
        <div className='nav__item subItem'>
            <NavLink to='/Friends'>Friends</NavLink>
            <div className='F'>
                <div className='F__f' >Agat</div>
                <div className='F__f'>Max</div>
                <div className='F__f'>Roman</div>
            </div>
        </div>
    </nav>;
}

export default Navbar;