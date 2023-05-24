import React from 'react'
import './Register.css';
import background from "./img/14.jpg";
import { useState } from "react";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [cpass, setCPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nation, setNation] = useState("");
  const Reg = /^[A-Za-z ]*$/;
  const Regex = /^[0-9]*$/;
  const Mail=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleSubmit = (e) => {
      e.preventDefault();
      if(Reg.test(fname)){
        if(Reg.test(lname)){
          if(Mail.test(email)){
          if(Regex.test(phone) && phone.length===10){
            if(address.length<=250){
              if(Regex.test(age) && age<200 && age>10){
                if(gender!==""){
                  if(Reg.test(nation)){
                    if(pass===cpass){
                      alert("Register Succesfully")
                      window.location.href = "./login";
                    }else{
                      alert("Invalid Password or Confirm Password");
                    }
                  }else{
                    alert("Invalid Nation");
                  }
                }else{
                  alert("Select any Gender");
                }
              }else{
                alert("Invalid Age");
              }
            }else{
              alert("The Address is exceed the Length of 250 words");
            }
          }
          else{
            alert("Invalid Phone Number");
          }
        }else{
          alert("Invalid Email ID");
        }
        }else{
          alert("Invalid Last Name");
        }
      }else{
        alert("Invalid First Name");
      }
      fetch("http://localhost:5000/register",{
        method:"POST",
        crossDomain:true,
        headers:{
         "Content-Type":"application/json",Accept:"application/json",
         "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
            fname,
            lname,
            email,
            phone,
            address,
            age,
            gender,
            nation,
            pass,
            cpass
        }),
      })
      .then((res)=>res.json())
      .then((data)=>{console.log(data,"UserRegister");
      if (data.status === "ok") {
        alert("Register Succesfully");
      }
      else{
        alert("User Already Exist");
      }
    });
  }
  return (
    <div className='Register'  style={{ backgroundImage: `url(${background})`, height:950,backgroundSize: 'cover',marginTop:-88}}>
      <form className='form1' onSubmit={handleSubmit} style={{paddingBottom:+30}}>
        <h3>Register Here</h3>
        <div className='row'>
        <div className='column'>
              <label className='fname'>First Name</label>
              <input type='text' className='fname' id='fname' name='fname' placeholder='First Name' required="required" onChange={(e) => setFname(e.target.value)}/>
              <label className='email'>Email</label>
              <input type='email' className='email' id='email' name='email' placeholder='Email' required="required" onChange={(e) => setEmail(e.target.value)}/>
              <label className='age'>Gender</label>
              <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="">Select the Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather Not to Say">Rather Not to Say</option>
              </select>
              <label className='address'>Address</label>
              <input type='text' className='address' id='address' name='address' placeholder='Address' required="required" onChange={(e) => setAddress(e.target.value)}/>
              <label className='Pass'>Password</label>
              <input type='password' className='Pass' id='pass' name='pass' placeholder='Password' required="required" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='column'>
        <label className='lname'>Last Name</label>
              <input type='text' className='lname' id='lname' name='lname' placeholder='Last Name' required="required" onChange={(e) => setLname(e.target.value)}/>
              <label className='pnumber'>Phone Number</label>
              <input type='text' className='pnumber' id='pnumber' name='pnumber' placeholder='Phone Number' required="required" onChange={(e) => setPhone(e.target.value)}/>
              <label className='age'>Age</label>
              <input type='number' className='age' id='age' name='age' placeholder='Age' required="required" onChange={(e) => setAge(e.target.value)}/>
              <label className='nation'>Nationality</label>
              <input type='text' className='nation' id='nation' name='nation' placeholder='Nationality' required="required" onChange={(e) => setNation(e.target.value)}/>
              <label className='CPass'>Confirm Password</label>
              <input type='password' className='CPass' id='Cpass' name='Cpass' placeholder='Confirm Password' required="required" onChange={(e) => setCPassword(e.target.value)}/>
        </div>
        </div><br></br>
        <div><input type='submit' className='regis'  style={{color:'black',backgroundColor:'#ffffff',marginLeft:0}} /></div>
      </form>
    </div>
  )
}
export default Register;