import React from 'react';
import { NavLink } from 'react-router-dom';
import Signin from './signin';

import { useSelector } from 'react-redux';


const linkStyle = { textDecoration: 'none', color: 'white' };
const Navbar = () => {
    
    return (
        <><div>
            <NavLink style={linkStyle} to=''>
                <h1 >Keep Fresh</h1> </NavLink> </div>
            <div>
                <Signin/>
                
                <NavLink style={linkStyle} to='/history'>View History</NavLink>
                <NavLink style={linkStyle} to='/aboutUs'>About Us</NavLink>
            </div>
        </>
    )
}

export default Navbar;