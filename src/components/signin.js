import React, { useEffect } from 'react';
import   { storeUserInfo, currentUser} from '../reducers/userSlice';
// import {GoogleButton} from 'react-google-button'
// import { GoogleLogin } from '@react-oauth/google';
// import { hasGrantedAllScopesGoogle } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { useDispatch, useSelector } from 'react-redux';
// import {connect} from '../../calendar'

// const hasAccess = hasGrantedAllScopesGoogle(
//   tokenResponse,
//   'openid',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   '.../auth/userinfo.email',
//  ' .../auth/calendar'
// );


const Signin = () => {
    const user  = useSelector(currentUser);
    const dispatch = useDispatch();

    function handleCallbackResponse(response){
        const userObject = jwt_decode(response.credential);

        const newUser = {
            //new mongooseID generated in controller
            displayName: userObject.given_name, 
            email: userObject.email};
        
       
        dispatch(storeUserInfo(newUser));

        console.log('current user', user);
    };

    useEffect(() => {
    
        google.accounts.id.initialize({
            client_id: "215929364522-bi5i854us765mig4gu8gn61ai6trug9n.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
    }, [])

    
    return (
        <>
         <div id='signInDiv'
         
         ></div>
         </> 
    )
}

export default Signin