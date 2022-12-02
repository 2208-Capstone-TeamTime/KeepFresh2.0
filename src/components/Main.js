import React from 'react'
import Receipt from './Receipts'
import Products from './Products'
import { Routes, Route } from 'react-router-dom'
/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
     <Routes>
        <Route path='/' element={<>
            <Products/>
            <Receipt />
        </>}>

        </Route>
     </Routes>
      </main>
    </div>
  )
}

export default Main
