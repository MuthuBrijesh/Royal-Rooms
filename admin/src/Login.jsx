import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import background from "./img/14.jpg";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setpass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/login", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({ email, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          sessionStorage.setItem("token", data.data);
          sessionStorage.setItem("AloggedIn", "true");
          window.location.href = "./Home";
        }
        else{
          alert("Invalid Credentials");
        }
      });
  }
  return (
    <div className='Login' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-88}}>
    <form  onSubmit={handleSubmit}>
    <h3 className='org'>Login Here</h3>
    <label className='Email'>Email</label>
    <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" onChange={(e) => setEmail(e.target.value)}/>
    <label className='Pass'>Password</label>
    <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" onChange={(e) => setpass(e.target.value)} />
    <br></br>
    <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Log In'/>
    <br></br>
    <Link to='../ForgetPass'><input type='submit' className='forget' style={{color:'black',backgroundColor:'#ffffff'}} value='Forgot Password'/></Link>
    </form>
  </div>
  )
}

export default Login