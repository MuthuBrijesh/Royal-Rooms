import React from 'react';
//import image1 from './img/10.jpg';
import './ListofRooms.css';
import { useState,useEffect} from "react";

function Rooms(e) {
  const [data,setData]=useState([]);
  useEffect (()=>{
    fetch("http://localhost:5000/roomdetails", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data); 
    });
  },[]);
  const show = (id) =>{
    sessionStorage.setItem("hotelid", id);
    window.location.href="./Rooms1";
    }
  return (
    <div className='Rooms'>
    <div><h1 style={{textAlign:'center',marginTop:20,fontSize:60,fontFamily:'CerebriSans-Regular, -apple-system, BlinkMacSystemFont, Roboto'}}>List of Rooms</h1></div>
    <div className='ROWIII'>
      <div className='COLII'></div>
    <div className='COLIII'>
    { data.map((i)=>{
            return (      
            <div className="card" style={{height:300,width:1000,marginLeft:0,marginTop:30,marginBottom:20}}>
            <div className='row'>
              <div className='col' style={{marginRight:100}}><img src={i.image1} style={{margin:10,height:280,width:380}} alt="a;t
              "/></div>
              <div className='col' style={{marginLeft:-100,marginTop:10}}>
                <h1>{i.hotel}</h1>
                <h2>Count : {i.maxc}</h2>
                <h3>Room Type : <b>{i.roomt}</b></h3>
                <h3>Cuisines : {i.cusine}</h3>
                <h6>{i.desc}</h6>
              </div>
              <div className='col'><h2 style={{marginTop:'50%',marginLeft:'15%',fontSize:50}}><b>Rs:{i.cost}</b></h2>
              <button className='button-87' style={{marginLeft:60}} onClick={(e)=>show(i._id)}>View Details</button></div>
              </div>
          </div>);
            })
          }
</div></div>
    </div>
  )
}

export default Rooms