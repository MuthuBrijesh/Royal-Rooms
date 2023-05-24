import React from 'react'
import './Change.css';
import { useState } from "react";
import background from "./img/14.jpg";

const Change = () => {
  const [otp,setotp] = useState("");
  const [password,setpass] = useState("");
  const [cpassword,setcpass] = useState("");
  const OTPC=sessionStorage.getItem("OTP");
  const email=sessionStorage.getItem("ForgetEmail");
  console.log(OTPC,email);
    function handleSubmit(e) {
      e.preventDefault();
      if(OTPC === otp){
        if(password===cpassword){
      fetch("http://localhost:5000/change", { method: "POST", crossDomain: true,
        headers: { "Content-Type": "application/json",
          Accept: "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify({email, password, cpassword}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            alert("Password Changed Successful");
            window.location.href = "./Login";
          }
          else{
            alert("Invalid Credentials");
          }
        });
    }else{
      alert("Invalid Password");
    }
  }else{
      alert("Invalid OTP");
    }
  }
  return (
    <div className='Change' style={{ backgroundImage: `url(${background})`, height:880,backgroundSize: 'cover'}}>
    <form  onSubmit={handleSubmit} style={{marginBottom:0}}>
    <h3>Change Password</h3>
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