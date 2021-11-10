import React from 'react';
import { useLocation,useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import "./Login.css"
import login from '../../Images/login.png'
const Login = () => {
    const { signInUsingGoogle} = useAuth();
         const history=useHistory();
       const location=useLocation();
       const redirect_url=location.state?.from || "/home";

       const handleSignInUsingGoogle=()=>{
           signInUsingGoogle()
           .then(result => {
            
            console.log(result.user);
               history.push(redirect_url);
              
            

        })
       };

    


    return (

        <div className="login ">
               <h3>Please LogIn</h3>
<div className="col-md-4 d-flex justify-content-center ">
            
        <div className="cart">
          <div className="cart-details">
            <img src={login} alt="" />
          </div>
          <div className="text-area">
          <button className="btn btn-warning mx-1" onClick={handleSignInUsingGoogle}> Google Sign In</button>
          </div>
        </div>
      </div>
        </div>
        
       
    );
};

export default Login;
