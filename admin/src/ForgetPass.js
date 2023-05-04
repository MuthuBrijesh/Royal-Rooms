import React from 'react'
import './ForgetPass.css';
import { useState } from "react";
import background from "./img/14.jpg";
import { Link } from 'react-router-dom'

const ForgetPass = () =>{
    const [email,setemail] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:5000/forget-password", { method: "POST", crossDomain: true,
        headers: { "Content-Type": "application/json",
          Accept: "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify({ email}),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          console.log(data, "userRegister");
        });
    }
    return (
      <div className='Forget' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-88}}>
      <form  onSubmit={handleSubmit}>
      <h3>Forgot Password</h3>
      <label className='Email'>Email</label>
      <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" onChange={(e) => setemail(e.target.value)}/>
      <br></br>
      <Link to='../Change'><input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Log In'/></Link>
      <br></br>
      </form>
    </div>
    )
}

export default ForgetPass