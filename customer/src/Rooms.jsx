import React from 'react';
//import image1 from './img/10.jpg';
import './Rooms.css';
import { useState , useEffect} from "react";

function Rooms() {
  const [data,setData]=useState([]);
  useEffect (()=>{
    fetch("http://localhost:5000/roomdetails", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,data);
      setData(data.data); 
    });
  });
  /*function validate(e) {
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
  }*/
  function room(){

  }
  return (
    <div className='Rooms'>
    <div><h1 style={{textAlign:'center',marginTop:20,fontSize:60,fontFamily:'CerebriSans-Regular, -apple-system, BlinkMacSystemFont, Roboto'}}>List of Rooms</h1></div>
    <div className='ROWIII'>
      <div className='COLII'></div>
    <div className='COLIII'>
    { data.map((i)=>{
            return (      
            <div className="card" style={{height:300,width:1000,marginLeft:0,marginTop:30,marginBottom:20}} onClick={room()}>
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
              <button className='button-87' style={{marginLeft:60}}>View Details</button></div>
              </div>
          </div>);
            })
          }
</div></div>
    </div>
  )
}

export default Rooms