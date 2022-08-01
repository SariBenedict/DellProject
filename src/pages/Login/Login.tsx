import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useStyles from './Login.styles';
import { LogIn } from './Model';
const Login:React.FC = () => {
    const classes=useStyles();
    const navigate = useNavigate();
  const [logIn, setLogIn] = useState<LogIn>({ name: " ", password: " " })
    const handleSubmit = async () => {

      try {
        const response = await ((axios({ url: `http://localhost:8080`, method: 'POST', data: logIn })))
        localStorage.setItem("uuid", response.data);
        navigate("/");
      }
      catch (error) {
  
        //404-not found
        //405-5 tries
      }
  
  
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
        <input type="text" name="userName" id="userName" placeholder="Username" onChange={(e) => setLogIn({ ...logIn, name: e.target.value })} />
      </div>
      <div className="form-field d-flex align-items-center">
        <span className="fas fa-key"></span>
        <input type="password" name="password" id="pwd" placeholder="Password" onChange={(e) => setLogIn({ ...logIn, password: e.target.value })} />
      </div>
      <button className="btn mt-3" type="submit" >Login</button>
    </form>
  </div>
  )
}

export default Login;