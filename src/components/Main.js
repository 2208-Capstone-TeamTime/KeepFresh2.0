import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Receipt from './Receipts'
import Products from './Products'
import Expirations from './Expirations'
import Navbar from './navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';


/* 
    This is you entry point for your routes
*/


const Main = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId='215929364522-bi5i854us765mig4gu8gn61ai6trug9n.apps.googleusercontent.com' >
        <nav>
          <Navbar />
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
      </GoogleOAuthProvider>
      
    </div>
  )
}

export default Main
