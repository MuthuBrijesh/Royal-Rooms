import React from 'react'
import './Register.css';
import { useState } from "react";


function Register() {
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
      fetch("http://localhost:5000/cregister",{
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
      .then((data)=>{console.log(data,"CustomerRegister");
      if (data.status === "ok") {
        alert("Register Succesfully");
      }
      else{
        alert("User Already Exist");
      }
    });
  }
  return (
    <div className='Reg'>
      <form className='form1'  onSubmit={handleSubmit}>
        <h3>Register</h3>
        <div className='row'>
          <div className='column'>
            <div className='values'>
              <label className='fname'>First Name</label><br></br>
              <input type='text' className='fname' id='fname' name='fname' placeholder='Enter the First Name' required="required"  onChange={(e) => setFname(e.target.value)}/>
              <br></br><br></br>
              <label className='email'>Email</label><br></br>
              <input type='email' className='email' id='email' name='email' placeholder='Enter the Email' required="required"  onChange={(e) => setEmail(e.target.value)}/>
              <br></br><br></br>
              <label className='pnumber'>Phone Number</label><br></br>
              <input type='text' className='pnumber' id='pnumber' name='pnumber' placeholder='Enter the Phone Number' required="required"  onChange={(e) => setPhone(e.target.value)}/>
              <br></br><br></br>
              <label className='address'>Address</label><br></br>
              <input type='text' className='address' id='address' name='address' placeholder='Enter the Address' required="required"  onChange={(e) => setAddress(e.target.value)}/>
              <br></br><br></br>
              <label className='Pass'>Password</label><br></br>
              <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className='column'>
            <div className='values1'>
              <label className='lname'>Last Name</label><br></br>
              <input type='text' className='lname' id='lname' name='lname' placeholder='Enter the Last Name' required="required" onChange={(e) => setLname(e.target.value)} />
              <br></br><br></br>
              <label className='age'>Age</label><br></br>
              <input type='number' className='age' id='age' name='age' placeholder='Enter the Age' required="required" onChange={(e) => setAge(e.target.value)} />
              <br></br><br></br>
              <label className='age'>Gender</label><br></br>
              <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="">Select the Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <br></br><br></br>
              <label className='nation'>Nationality</label><br></br>
              <input type='text' className='nation' id='nation' name='nation' placeholder='Enter the Nationality' required="required" onChange={(e) => setNation(e.target.value)} />
              <br></br><br></br>
              <label className='CPass'>Confirm Password</label><br></br>
              <input type='password' className='CPass' id='Cpass' name='Cpass' placeholder='Enter the Confirm Password' required="required" onChange={(e) => setCPassword(e.target.value)} />
            </div>
          </div>
        </div>
        <div><input type='submit' className='regis'/></div>
      </form>
    </div>
  )
}

export default Register