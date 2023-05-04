import React from 'react'
import './AddRoom.css';
import { useState } from "react";
import background from "./img/8.jpg";


const AddHotel = () =>{
  const [maxc, setMaxc] = useState("");
  const [roomt, setRoomT] = useState("");
  const [desc, setDesc] = useState("");
  const [cusine, setCus] = useState("");
  const [ambience, setAmbi] = useState("");
  const [cost,setAmt] = useState(""); 
  const Reg = /^[A-Za-z ]*$/;
  const Regex = /^[0-9]*$/;
  function validate(e) {
    e.preventDefault();
    console.log(maxc,roomt);
    if(Reg.test(ambience)){
        if(Reg.test(desc)){
            if(Reg.test(cusine)){
                if(Regex.test(cost) && (cost>0) && (cost<10000000)){
                    alert("Success");
                }else{
                    alert("Invalid Amount");
                }
            }else{
                alert("Invalid Cusine");
            }
        }else{
        alert("Invalid Phone Description");
        }
    }else{
      alert("Invalid Hotel Ambience");
    }
  }
  return(
    <div  className='Room' style={{ backgroundImage: `url(${background})`, height:1000,backgroundSize: 'cover',marginTop:-88}}>
      <form className='form3' onSubmit={validate}>
        <h3>Add Room</h3>
        <label for="m_count">Maximum Count</label>
        <select id="m_count" name="m_count" onChange={(e) => setMaxc(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="type">Room Type</label>
        <select id="type" name="type" onChange={(e) => setRoomT(e.target.value)}>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="trible">Trible Room</option>
            <option value="quad">Quad Room</option>
            <option value="suite">Suite Room</option>
            <option value="disabled">Disabled Room</option>
        </select>
        <label className='ambience'>Ambience</label>
        <input type='text' className='ambience' id='ambience' name='ambience' placeholder='Ambience' required="required" onChange={(e) => setAmbi(e.target.value)} />
        <label className='desp'>Description</label>
        <input type='text' className='desp' id='desp' name='desp' placeholder='Description' required="required" onChange={(e) => setDesc(e.target.value)} />
        <label className='cus'>Cusine</label>
        <input type='text' className='cus' id='cus' name='cus' placeholder='Cusine' required="required" onChange={(e) => setCus(e.target.value)} />
        <label className='amt'>Amount</label>
        <input type='text' className='amt' id='amt' name='amt' placeholder='Amount' required="required" onChange={(e) => setAmt(e.target.value)} />
        <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff',marginTop:20}} value='Submit'/>
      </form>
    </div>
  );
}

export default AddHotel