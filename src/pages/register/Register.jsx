import React, { useState } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { $register } from '../../http/login'
import "./Register.css"


function Register() {
  const name=useRef(null)
  const email=useRef(null)
  const [password,setPassword]=useState(null)
  const [rePassword,setRePassword]=useState(null)
 const [error,setError]=useState()
const registerUser=async ()=>{
  
if(password!==rePassword||!email.current.value||!name.current.value){
  alert("All properties required")
  return
}

 const reg=await $register({name:name.current.value,email: email.current.value,password})
 setError(reg)
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
            <input className='login__input' type="text" placeholder='Name' ref={name} />
                <input className='login__input' type="text" placeholder='Email'ref={email} />
                <input  className='login__input' type="text" placeholder='Password' minLength={6} onChange={(e)=>setPassword(e.target.value)}/>
                <input  className='login__input' type="text" placeholder=' Repeat Password' minLength={6} onChange={(e)=>setRePassword(e.target.value)} />
                       <button className='login__button' onClick={()=>registerUser()}> Sign Up</button>
                       <span className='login__forgot'> Forgot Password</span>
                  <div style={{color:"red",margin:"auto"}}> {password!==rePassword&&"Passwords not Matches"}
                  {error}
                  
                  </div>    
                      <NavLink to="/login"><button className="login__registerButton">Log Into Accaunt</button></NavLink> 
            </div>
        </section>
    </div>

</div>
  )
}

export default Register