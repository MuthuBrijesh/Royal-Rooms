import React from 'react'
import { useState } from "react";

function ForgetPass() {
    const [email,setemail] = useState("");
    function handleSubmit(e) {
      var x = Math.floor((Math.random() * 999999) + 111111);
      e.preventDefault();
      fetch("http://localhost:5000/cforget", { 
        method: "POST", crossDomain: true,
        headers: { "Content-Type": "application/json",
          Accept: "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify({ email,x}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok"){
            alert("OTP Sent Successful");
            sessionStorage.setItem("COTP",x);
            sessionStorage.setItem("CForgetEmail",email);
            window.location.href = "./Forgetpass2";
          }else{
            alert("Invalid Email ID");
          }
        });
    }
    return (
        <div className='Login'>
        <form >
        <h3>Change Password</h3>
        <label className='Email'>Email</label>
        <input type='email' className='Email' id='email' name='email' required="required" onChange={(e) => setemail(e.target.value)}/>
        <br></br>
        <button onClick={handleSubmit}>Submit</button><br></br>        
        </form>
      </div>
    )
}

export default ForgetPass;