import axios from 'axios';
import { error } from 'console';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../api/logInUser';
import useStyles from './Login.styles';
import { LogInDetails } from './Model';
const Login:React.FC = () => {
    const classes=useStyles();
    const navigate = useNavigate();
  const [logIn, setLogIn] = useState<LogInDetails>({ username: "", password: "" })
    const handleSubmit = async (e:any) => {
      e.preventDefault();
     
        const response = await logInUser(logIn);
        localStorage.setItem("uuid", response.data);
        navigate("/");
      
  
  
    }
  return (
    <div className="wrapper">
    <div className="logo">
    </div>
    <div className="text-center mt-4 name" >
      DELL
      </div>
    <form className="p-3 mt-3" onSubmit={handleSubmit}>
      <div className="form-field d-flex align-items-center">
        <span className="far fa-user"></span>
        <input type="text" name="userName"  placeholder="Username" onChange={(e) => setLogIn({ ...logIn, username: e.target.value })} />
      </div>
      <div className="form-field d-flex align-items-center">
        <span className="fas fa-key"></span>
        <input type="password" name="password" placeholder="Password" onChange={(e) => setLogIn({ ...logIn, password: e.target.value })} />
      </div>
      <button className="btn mt-3" type="submit" >Login</button>
    </form>
  </div>
  )
}

export default Login;