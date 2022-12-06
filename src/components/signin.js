import React, { useEffect } from 'react';
import {GoogleButton} from 'react-google-button'
import { GoogleLogin } from '@react-oauth/google';
import { hasGrantedAllScopesGoogle } from '@react-oauth/google';

// const hasAccess = hasGrantedAllScopesGoogle(
//   tokenResponse,
//   'openid',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   '.../auth/userinfo.email',
//  ' .../auth/calendar'
// );


const Signin = () => {

    const handleGoogleLogin =() =>{
        <GoogleLogin
        
/>
    }
    return (
        <>
         
        <GoogleButton 
        onClick={()=> google.accounts.id.initialize({
            client_id: '215929364522-bi5i854us765mig4gu8gn61ai6trug9n.apps.googleusercontent.com',
            callback: handleGoogleLogin})

          google.accounts.id.prompt()
         }/> 

        </>
        
    )
}

export default Signin