import React from 'react'
import './AddHotel.css';
import { useState } from "react";
import background123 from "./img/14.jpg";


const AddHotel = () =>{
  const [name, setHotelN] = useState("");
  const [addr, setAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage1] = useState("");
  console.log(addr,image);
  const Reg = /^[A-Za-z ]*$/;
  const Regex = /^[0-9]*$/;
  function validate(e) {
    e.preventDefault();
    if(Reg.test(name)){
      if(Regex.test(phone) && phone.length===10){
      if(Reg.test(city)){
        if(image !== ""){
            hote();
        }else{
          alert("Invalid Nation");
        }
      }else{
        alert("Invalid City");
      }
    }else{
      alert("Invalid Phone Number");
    }
    }else{
      alert("Invalid Hotel Name");
    }
  }
  function hote(){
    fetch("http://localhost:5000/addhotel",{
        method:"POST",
        crossDomain:true,
        headers:{
        "Content-Type":"application/json",Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
            name,
            addr,
            phone,
            city,
            image
        }),
      })
      .then((res)=>res.json())
      .then((data)=>{console.log(data,"UserRegister");
      if (data.status === "ok") {
        alert("Hotel Added Succesfully");
      }
      else{
        alert("Hotel Already Exist");
      }
    });
  }
  return(
    <div  className='hotel' style={{ backgroundImage: `url(${background123})`,backgroundSize: 'cover', height:850,marginTop:-100}}>
      <form className='form3' onSubmit={validate}>
        <h3>Add Hotels</h3>
        <label className='hn'>Hotel Name</label>
        <input type='text' className='hn' id='hn' name='hn' placeholder='Hotel Name' required="required" onChange={(e) => setHotelN(e.target.value)}/>
        <label className='add'>Address</label>
        <input type='text' className='add' id='add' name='add' placeholder='Address' required="required" onChange={(e) => setAddr(e.target.value)}/>
        <div class="row"><div class="col"><label className='phn'>Phone</label>
        <input type='text' className='phn' id='phn' name='phn' placeholder='Phone Number' required="required" onChange={(e) => setPhone(e.target.value)}/></div>
        <div class="col"><label className='city'>City</label>
        <input type='text' className='city' id='city' name='city' placeholder='City' required="required" onChange={(e) => setCity(e.target.value)}/></div>
        </div>
        <label className='url'>Image URL</label>
        <input type='text' className='url' id='url' name='url' placeholder='Image URL 1' required="required" onChange={(e) => setImage1(e.target.value)}/>
        <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff',marginTop:20}} value='Submit'/>
      </form>
    </div>
  );
}

export default AddHotel