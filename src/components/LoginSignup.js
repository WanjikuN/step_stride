import React from 'react'
import './LoginSignup.css'


const  LoginSignup = () => {
  return (
    <div className='Container'>
        <div className="header">
            <div className="text">Sign Up</div>
              <div className="underline"></div>
        </div>
          <div className="inputs">
          <div className="input">
          <input type="text" placeholder='Name'/>
        </div>
        </div>

          <div className="inputs">
          <div className="input">
          <input type="email" placeholder='Email'/>
        </div>
        </div>

          <div className="inputs">
          <div className="input">
          <input type="password" placeholder='Password'/>
        </div>
        </div>

          <div className="forgot-password">Forgotten password <span>Click Here!</span> </div>
          <div className="Submit-container">
          <div className="Submit">Sign Up</div>
          <div className= "Submit">Login</div>
       </div>
    </div>
  )
}

export default LoginSignup;