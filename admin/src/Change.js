import React from 'react'
import './Change.css';
import { useState } from "react";
import background from "./img/14.jpg";

const Change = () => {
  const [email,setEmail] = useState("");
  const [otp,setotp] = useState("");
  const [password,setpass] = useState("");
  const [cpassword,setcpass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email,otp,password,cpassword);
    fetch("http://localhost:5000/login", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({ email, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successful");
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
    <div className='Change' style={{ backgroundImage: `url(${background})`, height:880,backgroundSize: 'cover',marginTop:-88}}>
    <form  onSubmit={handleSubmit}>
    <h3>Change Password</h3>
    <label className='Email'>Email</label>
    <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" onChange={(e) => setEmail(e.target.value)}/>
    <label className='Otp'>OTP</label>
    <input type='text' className='Otp' id='otp' name='otp' placeholder='Enter the OTP' required="required" onChange={(e) => setotp(e.target.value)} />
    <label className='Pass'>Password</label>
    <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" onChange={(e) => setpass(e.target.value)} />
    <label className='CPass'>Confirm Password</label>
    <input type='password' className='CPass' id='cpass' name='cpass' placeholder='Enter the Confirm Password' required="required" onChange={(e) => setcpass(e.target.value)} />
    <br></br>
    <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Change'/>
    <br></br>
    </form>
  </div>
  )
}

export default Change