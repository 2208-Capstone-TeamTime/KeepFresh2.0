import React from 'react';
import { NavLink } from 'react-router-dom';
import Signin from './signin';

const linkStyle = { textDecoration: 'none', color: 'white' };
const Navbar = () => {

    return (
        <>
            <div>
                <NavLink style={linkStyle} to=''>
                <img id='logo' className="lil-nav__img" src="https://i.postimg.cc/ncNFsKGC/1.jpg" alt="Stuff" />
                </NavLink>
            </div>
            <div className='dropdown'>
                <Signin className="dropbtn" />
                <div className='dropdown-content'>
                    <NavLink style={linkStyle} to='/'>Home</NavLink>
                    <NavLink style={linkStyle} to='/start'>Calculate Expiration</NavLink>
                    <NavLink style={linkStyle} to='/history'>Storage</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;