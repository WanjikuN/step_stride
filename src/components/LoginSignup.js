import React, {useState} from 'react'
import './LoginSignup.css'


const  LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
     body: JSON.stringify({ name, email, password})
      });


        const data = await response.json();
        console.log('User added:', data);
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className='Container'>
        <div className="header">
            <div className="text">{action}</div>
              <div className="underline"></div>
        </div>
          <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>}
         
        </div>

          <div className="inputs">
          <div className="input">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        </div>

          <div className="inputs">
          <div className="input">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        </div>
          {action==="Sign Up"? null : (<div className="forgot-password">Forgotten password <span>Click Here!</span> </div>)}
          <div className="Submit-container">
          <div className={action==="Login"?"Submit grey":"submit"}onClick={()=>{setAction("Sign Up"); addUser();}}>Sign Up</div>
          <div className={action==="Sign Up"?"Submit grey":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
       </div>
    </div>
  );
};

export default LoginSignup;