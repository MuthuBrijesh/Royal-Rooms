import React from 'react'
import { useState } from "react";

function ForgetPass2() {
  const [otp,setotp] = useState("");
  const [password,setpass] = useState("");
  const [cpassword,setcpass] = useState("");
  const OTPC=sessionStorage.getItem("COTP");
  const email=sessionStorage.getItem("CForgetEmail");
  console.log(OTPC,email);
    function handleSubmit(e) {
      e.preventDefault();
      if(OTPC === otp){
        if(password===cpassword){
      fetch("http://localhost:5000/cchange", { method: "POST", crossDomain: true,
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
        <div className='Login'>
        <form onSubmit={handleSubmit}>
        <h3>Change Password</h3>
        <label className='Email'>OTP</label>
        <input type='text' className='Email' id='email' name='email' required="required" onChange={(e) => setotp(e.target.value)} />
        <label className='Email'>Password</label>
        <input type='password' className='Email' id='email' name='email' required="required" onChange={(e) => setpass(e.target.value)} />
        <label className='Email'>Confirm Password</label>
        <input type='password' className='Email' id='email' name='email' required="required" onChange={(e) => setcpass(e.target.value)} />
        <br></br>
        <button>Submit</button><br></br>        
        </form>
      </div>
    )
}

export default ForgetPass2