import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Receipt from './Receipts';
import Products from './Products';
import Expirations from './Expirations';
import History from './History';
import Navbar from './navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';


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
            <Route path='/history' element={<>
              <History />
            </>}>
            </Route>

          </Routes>
        </main>
      </GoogleOAuthProvider>
      
    </div>
  )
}

export default Main;
