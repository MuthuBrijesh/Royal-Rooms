import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email123 = "muthubrijesh20@gmail.com";
  const pass123 = "Manchsester@20";
  const [email,setemil] = useState("");
  const [psw,setpd] = useState("");
  const navigate= useNavigate()
  const setEmail=(event)=>{
    setemil(event.target.value);
  }
  const setpasd=(event)=>{
    setpd(event.target.value);
  }
  const vadate=()=>{
    if(email === email123){
      if(psw.match(pass123))
        {
            alert("Success")
            navigate('../Register');
        }
        else{
            alert("Invalid Password");
        }
    }
    else{
      alert("Invalid Email");
    }
  }
  return (
    <div className='log'>
      <div className='row'>
      <div className='column'>
      <div className='form'>
        <div className='logi'>
          <br></br><br></br>
        <h3>Log in</h3></div>
        <br></br>
        <div className='values'>
        <label className='Email'>Email</label><br></br>
        <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" onChange={setEmail}/>
        <br></br>
        <label className='Pass'>Password</label><br></br>
        <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" onChange={setpasd}/>
        <input type='submit' className='sub' onClick={vadate}/>
        </div>
        </div></div>
        <div className='column'>
      <div className='for'>
        <label className='for12'>Forget Password</label>
      <Link to='../ForgetPass'><input type='submit' className='for-get'/></Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login