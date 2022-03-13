import React from 'react'
import "./Register.css"


function Register() {
  return (
    <div className='login'>

    <div className="login__wraper">

        <section className="login__left">
            <h3 className="login__logo"> Social Network</h3>
            <p className="login__description">Connect with friends across world and family</p>
            

        </section>

        <section className="login__right">
            <div className="login__box">
            <input className='login__input' type="text" placeholder='Name' />
                <input className='login__input' type="text" placeholder='Email' />
                <input  className='login__input' type="text" placeholder='Password' />
                <input  className='login__input' type="text" placeholder=' Repeat Password' />
                       <button className='login__button'> Sign Up</button>
                       <span className='login__forgot'> Forgot Password</span>
                       <button className="login__registerButton">Log Into Accaunt</button>
            </div>
        </section>
    </div>

</div>
  )
}

export default Register