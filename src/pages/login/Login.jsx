import jwt_decode from "jwt-decode"
import React, { useState } from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LoginSucess } from '../../context/AuthAction'
import { AuthStateValue } from '../../context/AuthContext'
import { $login } from '../../http/login'
import "./Login.css"
function Login() {
    const email = useRef()
    const password = useRef()
    const [spinner, setSpinner] = useState(null)
    const { user, dispatch } = AuthStateValue()
const [error,setError]=useState()
   
    const loginHandler = async (e) => {
        try{
           setSpinner("Checking...")
        const login = await $login(email.current.value, password.current.value)
        setSpinner(null)
        localStorage.setItem("SociallApp",login)
        const jwt=  localStorage.getItem("SociallApp")

        const decoded=jwt_decode(jwt)
 
        decoded&& dispatch(LoginSucess(decoded._doc)); 
        }
       catch(e){
         setError("Wrong email or password")
         setSpinner("Log In")
       }
        
    

        console.log(user.user);

    }
    return (
        <div className='login'>
            <div className="login__wraper">

                <section className="login__left">
                    <h3 className="login__logo"> Social Network</h3>
                    <p className="login__description">Connect with friends across world and family</p>
                </section>

                <section className="login__right">

                    <div className="login__box">
                        <input className='login__input' type="text" placeholder='Email' ref={email} required />
                        <input className='login__input' type="text" placeholder='Password' ref={password} required />
                        <button className='login__button' onClick={loginHandler}>{spinner ? spinner: "Log In"} </button>
                      
                        <span className='login__forgot'> Forgot Password</span>

                       <h3 style={{color:"red",margin:"0 auto"}}>{error}</h3> 

                      <Link to ="/register"> <button className="login__registerButton" >   Register</button></Link> 



                    </div>
                </section>

            </div>

        </div>
    )
}

export default Login