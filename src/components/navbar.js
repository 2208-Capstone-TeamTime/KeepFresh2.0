import React from 'react';
import { NavLink } from 'react-router-dom';
import {GoogleButton} from 'react-google-button'

const linkStyle = { textDecoration: 'none', color: 'white' };
const Navbar = () => {
    return (
        <><div>
            <NavLink style={linkStyle} to=''>
                <h1 >Keep Fresh</h1> </NavLink> </div>
            <div>
                <NavLink style={linkStyle} to='/login'>
                    <GoogleButton/> 
                </NavLink>
                <NavLink style={linkStyle} to='/find'>Search</NavLink>
                <NavLink style={linkStyle} to='/aboutUs'>About Us</NavLink>
            </div>
        </>
    )
}

export default Navbar;