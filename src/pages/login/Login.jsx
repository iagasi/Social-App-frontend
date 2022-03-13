import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className='login'>

            <div className="login__wraper">

                <section className="login__left">
                    <h3 className="login__logo"> Social Network</h3>
                    <p className="login__description">Connect with friends across world and family</p>
                    

                </section>

                <section className="login__right">
                    <div className="login__box">
                        <input className='login__input' type="text" placeholder='Email' />
                        <input  className='login__input' type="text" placeholder='Password' />
                               <button className='login__button'> Log In</button>
                               <span className='login__forgot'> Forgot Password</span>
                               <button className="login__registerButton">Register</button>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Login