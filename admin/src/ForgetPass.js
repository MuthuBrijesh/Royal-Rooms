import React from 'react'
import './ForgetPass.css';
import { useState } from "react";
import background from "./img/14.jpg";

const ForgetPass = () =>{
    const [email,setemail] = useState("");
    function handleSubmit(e) {
      var x = Math.floor((Math.random() * 999999) + 111111);
      e.preventDefault();
      fetch("http://localhost:5000/forget", { 
        method: "POST", crossDomain: true,
        headers: { "Content-Type": "application/json",
          Accept: "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify({ email,x}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            alert("OTP Sent Successful");
            sessionStorage.setItem("OTP",x);
            sessionStorage.setItem("ForgetEmail",email);
            window.location.href = "./Change";
          }else{
            alert("Invalid Email ID")
          }
        });
    }
    return (
      <div className='Forget' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-88}}>
      <form  onSubmit={handleSubmit}>
      <h3>Forgot Password</h3>
      <label className='Email'>Email</label>
      <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" onChange={(e) => setemail(e.target.value)}/>
      <br></br>
      <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Submit'/>
      <br></br>
      </form>
    </div>
    )
}

export default ForgetPass