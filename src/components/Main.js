import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Receipt from './Receipts'
import Products from './Products'
import Expirations from './Expirations'

/* 
    This is you entry point for your routes
*/

const linkStyle = {textDecoration: 'none', color:'white'};
const Main = () => {
  return (
    <div>
      <nav>
        <div>
          <NavLink style={linkStyle} to=''>
            <h1 >Keep Fresh</h1> </NavLink> </div>
        <div>
        <NavLink style={linkStyle} to='/login'>Sign In</NavLink>
        <NavLink  style={linkStyle} to='/find'>Search</NavLink>
        <NavLink  style={linkStyle} to='/aboutUs'>About Us</NavLink>
        </div>
        
      </nav>
      <main>
     <Routes>
        <Route path='/' element={<>
            <Receipt />
            <Products />
        </>}>
        </Route>
        <Route path='/exp' element={<>
            <Expirations />
        </>}>
        </Route>

     </Routes>
      </main>
    </div>
  )
}

export default Main
