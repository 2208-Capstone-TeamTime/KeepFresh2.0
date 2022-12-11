import React, { useEffect } from 'react';
import   { storeUserInfo, currentUser} from '../reducers/userSlice';
import jwt_decode from "jwt-decode"
import { useDispatch, useSelector } from 'react-redux';


const Signin = () => {
    const user = useSelector(currentUser);
    const dispatch = useDispatch();

    function handleCallbackResponse(response){
        const userObject = jwt_decode(response.credential);

        const newUser = {
            //new mongooseID generated in controller
            displayName: userObject.given_name, 
            email: userObject.email};
        
       
        dispatch(storeUserInfo(newUser));
        document.getElementById('signInDiv').hidden = true;
        document.getElementById('signOut').hidden = false;
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

    const setUser = () =>{
        window.location.reload();
    }
    
    return (
        <>
        <div id='signInDiv'/> 
      <button id='signOut' onClick={() =>setUser()}hidden>Sign Out</button>
         
         </> 
    )
}

export default Signin