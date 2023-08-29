import React, {useState} from 'react'
import './LoginSignup.css'


const  LoginSignup = () => {
 
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='Container'>
        <div className="header">
            <div className="text">{action}</div>
              <div className="underline"></div>
        </div>
          <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
          <input type="text" placeholder="Name"/>
        </div>}
         
        </div>

          <div className="inputs">
          <div className="input">
          <input type="email" placeholder="Email"/>
        </div>
        </div>

          <div className="inputs">
          <div className="input">
          <input type="password" placeholder="Password"/>
        </div>
        </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgotten password <span>Click Here!</span> </div>}
          <div className="Submit-container">
          <div className={action==="Login"?"Submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"Submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
       </div>
    </div>
  )
}

export default LoginSignup;