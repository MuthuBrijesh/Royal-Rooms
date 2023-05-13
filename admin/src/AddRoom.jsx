import React from 'react'
import './AddRoom.css';
import { useState , useEffect} from "react";
import background from "./img/14.jpg";


const AddHotel = () =>{
  const [maxc, setMaxc] = useState("");
  const [roomt, setRoomT] = useState("");
  const [desc, setDesc] = useState("");
  const [hotel, setHotel] = useState("");
  const [cusine, setCus] = useState("");
  const [cost,setAmt] = useState("");
  const [image1, setImage1] = useState(""); 
  const [image2, setImage2] = useState(""); 
  const [image3, setImage3] = useState(""); 
  const [image4, setImage4] = useState("");
  console.log(image1,image2,image3,image4,cusine,hotel); 
  const Reg = /^[A-Za-z ]*$/;
  const Regex = /^[0-9]*$/;
  const [data,setData]=useState([]);
  useEffect (()=>{
    fetch("http://localhost:5000/hoteldetails", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data); 
    });
  });
  function validate(e) {
    e.preventDefault();
    console.log(maxc,roomt);
      if(Regex.test(cost) && (cost>0) && (cost<10000000)){
        alert("Success");
        fun();
      }else{
        alert("Invalid Amount");
        }
      }
      function fun(){
        fetch("http://localhost:5000/addroom",{ method:"POST", crossDomain:true,
          headers:{ "Content-Type":"application/json",Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify({hotel,maxc,roomt,desc,cusine,cost,image1,image2,image3,image4}), })
        .then((res)=>res.json())
        .then((data)=>{console.log(data,"UserRegister");
        if (data.status === "ok") {
          alert("Room Added Succesfully");
          window.location.href="./AddRoom";
        }
      });
  }
  return(
    <div  className='Room' style={{backgroundImage: `url(${background})`, height:850,backgroundSize: 'cover'}}>
      <form className='form3' onSubmit={validate} style={{marginBottom:0}}>
      <h3>Add New Room</h3>
        <div class="row">
          <div class="col">
          <label for="m_count">Hotel Name</label>
        <select id="m_count" name="m_count" onChange={(e) => setHotel(e.target.value)} required="required">
          { data.map((i)=>{
            return (<option style={{backgroundColor:'black'}} value={i.name}>{i.name}</option>);
            })
          }
        </select>
        <label for="type">Room Type</label>
        <select id="type" name="type" onChange={(e) => setRoomT(e.target.value)} required="required">
            <option style={{backgroundColor:'black'}} value="single">Single Room</option>
            <option style={{backgroundColor:'black'}} value="double">Double Room</option>
            <option style={{backgroundColor:'black'}} value="trible">Trible Room</option>
            <option style={{backgroundColor:'black'}} value="quad">Quad Room</option>
            <option style={{backgroundColor:'black'}} value="suite">Suite Room</option>
            <option style={{backgroundColor:'black'}} value="disabled">Disabled Room</option>
        </select>
        <label className='cus'>Cusine</label>
        <input type='text' className='cus' id='cus' name='cus' placeholder='Cusine' required="required" onChange={(e) => setCus(e.target.value)} />
        <label className='url'>Image URL</label>
        <input type='text' className='url1' id='url1' name='url1' placeholder='Image URL 1' required="required" onChange={(e) => setImage1(e.target.value)}/><br></br>
        <input type='text' className='url3' id='url3' name='url3' placeholder='Image URL 3' required="required" onChange={(e) => setImage3(e.target.value)}/><br></br>
          </div>
          <div class="col">
          <label for="m_count">Maximum Count</label>
        <select id="m_count" name="m_count" onChange={(e) => setMaxc(e.target.value)} required="required">
            <option style={{backgroundColor:'black'}} value="1">1</option>
            <option style={{backgroundColor:'black'}} value="2">2</option>
            <option style={{backgroundColor:'black'}} value="3">3</option>
            <option style={{backgroundColor:'black'}} value="4">4</option>
            <option style={{backgroundColor:'black'}} value="5">5</option>
        </select>
        <label className='desp'>Description</label>
        <input type='text' className='desp' id='desp' name='desp' placeholder='Description' required="required" onChange={(e) => setDesc(e.target.value)} />
        <label className='amt'>Amount</label>
        <input type='text' className='amt' id='amt' name='amt' placeholder='Amount' required="required" onChange={(e) => setAmt(e.target.value)} />
        <input type='text' style={{marginTop:65}} className='url2' id='url2' name='url2' placeholder='Image URL 2' required="required" onChange={(e) => setImage2(e.target.value)}/><br></br>
        <input type='text' className='url4' id='url4' name='url4' placeholder='Image URL 4' required="required" onChange={(e) => setImage4(e.target.value)}/>
          </div>
        </div>
        <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff',marginTop:20}} value='Submit'/>
      </form>
    </div>
  );
}

export default AddHotel;