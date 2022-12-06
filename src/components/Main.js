import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Receipt from './Receipts'
import Products from './Products'
import Expirations from './Expirations'
import Navbar from './navbar'
import { AuthContextProvider } from '../context/Auth'


/* 
    This is you entry point for your routes
*/


const Main = () => {
  return (
    <div>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </div>
  )
}

export default Main
