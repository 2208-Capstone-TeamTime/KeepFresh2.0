import React, { useEffect } from 'react';
// import {GoogleButton} from 'react-google-button'
// import { GoogleLogin } from '@react-oauth/google';
// import { hasGrantedAllScopesGoogle } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
// import {connect} from '../../calendar'

// const hasAccess = hasGrantedAllScopesGoogle(
//   tokenResponse,
//   'openid',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   '.../auth/userinfo.email',
//  ' .../auth/calendar'
// );


const Signin = () => {

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential )
        const userObject = jwt_decode(response.credential)
        console.log(userObject)
    } 

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "215929364522-bi5i854us765mig4gu8gn61ai6trug9n.apps.googleusercontent.com",
            callback: handleCallbackResponse

        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
    }, [])

    // const handleGoogleLogin =() =>{
    //     google.accounts.id.prompt();
        
    // }

    // const list10 = connect();
    return (
        <>
         <div id='signInDiv'></div>

         
         {/* <GoogleLogin
                onSuccess={credentialResponse => {
                    hasGrantedAllScopesGoogle(
                        credentialResponse,
                        'https://www.googleapis.com/auth/calendar',
                        'https://www.google.com/calendar/feeds',
                        'https://www.googleapis.com/auth/calendar.events'
                      );
                    console.log(credentialResponse, credentialResponse.clientId);
                    list10();
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
            /> */}

        </>
        
    )
}

export default Signin