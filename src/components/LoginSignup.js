import React, {useState} from 'react'
import './LoginSignup.css'
import { useHistory } from 'react-router-dom'

const  LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3030/users', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
     body: JSON.stringify({ name, email, password})
      });

        const data = await response.json();
        console.log('User added:', data);
      if (action === 'Login') {
        const response = await fetch('http://localhost:3030/users', {
          method: 'GET',
      });

      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);
   
        if (user) {
          console.log('Login successful');
          
        } else {
          console.log('Login failed');
        }
      }

      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      console.error('Error:', err);
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
          <div className="Submit-container">
          <div className={action==="Sign Up" ? "Submit" : "submit-active"}onClick={()=>{if(action === "Sign Up") {handleSubmit();} setAction('Sign Up')}} >Sign Up</div>
          <div className={action==="Login" ? "Submit" : "submit-inactive"}onClick={()=>{if(action === "Login") {handleSubmit();} setAction('Login') }} >Login</div>
       </div>  
    </div>
  );
};

export default LoginSignup;