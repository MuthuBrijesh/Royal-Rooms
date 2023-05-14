import React from 'react';
import './Rooms1.css';
import { useState , useEffect} from "react";

/**const id ="645fc4dfc1998d72acd84ebe";    
 * <div className='container'>
      <h2 className='desc'>About the Venue</h2>
      <h3 style={{border: 0,paddingBottom: 7,fontWeight: 500,fontSize: 18,letterSpacing: 0.3}}>What to Expect</h3>
      <hr></hr>
    </div> */
    /*const [data,setData]=useState([]);
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
    });*/
function Rooms1() {
  const currDate = new Date().toLocaleDateString();
  var curr = currDate.split("/");
  if(curr[0]<9){
    curr[0]='0'+curr[0];
  }
  curr[3]=(parseInt(curr[2])+1).toString();
  var date =curr[2]+'-'+curr[0]+'-'+curr[1];
  var mdate = curr[3]+'-'+curr[0]+'-'+curr[1];
  const [rdate,setRDate]=useState("");
  const [nfdate,setNFDate]=useState("");
  const Regex = /^[0-9]*$/;
  const [data,setData]=useState([]);
  const [hotel,setHotel]=useState([]);
  useEffect (()=>{
    fetch("http://localhost:5000/roomsd", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data); 
      hotelfun();
    });
  });
  function hotelfun(){
    const name = data.hotel;
    fetch("http://localhost:5000/hoteldet", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify({name}),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "OK") {
      setHotel(data.data);
      }else{
        console.log("Hi");
      }
    });
  }
  function submit(){
    if(rdate!==""){
      if(Regex.test(nfdate) && nfdate!==""){
        alert("Booked Succesfully");
      }else{
        alert("Invalid Nights");
      }
    }else{
      alert("Date Required");
    }
  }
  return (
    <div className="RoomDE" style={{height:'100%',width:'100%'}}> 
    <div style={{backgroundColor:'black',height:710}}>
    <div className='row'>
    <div className='column'>
    <div className='card' style={{borderColor:'black'}}> <img src={data.image1} alt='img' style={{height:340,width:"100%"}} />
        </div>
      </div>
      <div className='column'>
      <h2 className='title' style={{marginTop:'15%',textAlign: 'center',fontWeight: 400,fontSize: 47,letterSpacing: 0.3,lineHeight: 1.1,color: '#fff'}}>{data.hotel}</h2>
      <h6 style={{textAlign: 'center',color: '#adb4bd',marginTop: 10,fontWeight: 300,fontSize: 27,letterSpacing: 0.3}}>{hotel.phone}</h6>
      <h6 style={{textAlign: 'center',color: '#adb4bd',marginTop: 10,fontWeight: 300,fontSize: 27,letterSpacing: 0.3}}>{hotel.addr}</h6>
      <h6 style={{textAlign: 'center',color: '#adb4bd',marginTop: 10,fontWeight: 300,fontSize: 27,letterSpacing: 0.3}}>{hotel.city}</h6>
      </div>
      <div className='column'>
      <div className='card' style={{borderColor:'black'}}> <img src={data.image3} alt='img' style={{height:340,width:"100%"}} />
        </div>
      </div>
      </div>
    <div className='row'>
    <div className='column'>
    <div className='card' style={{borderColor:'black'}}> <img src={data.image3} alt='img' style={{height:340,width:"100%"}} />
        </div>
      </div>
      <div className='column'>
      <h6 style={{fontSize: 15,color: '#9fa6b0',display:'block',lineHeight: 1.4,letterSpacing: 0.3,marginLeft: 80}}>CUISINE</h6>
      <h6 style={{marginTop: 0,color: '#ddd',fontSize: 20,letterSpacing: 0.2,lineHeight: 1.5,marginLeft:80}}>{data.cusine}</h6>
      <h6 style={{fontSize: 15,color: '#9fa6b0',display:'block',lineHeight: 1.2,letterSpacing: 0.3,marginLeft: 80}}>Maximum Count : <b style={{marginTop: 0,color: '#ddd',fontSize: 20,letterSpacing: 0.2,lineHeight: 1.5,marginLeft:10}}>{data.maxc}</b></h6>
      <h6 style={{fontSize: 15,color: '#9fa6b0',display:'block',lineHeight: 1.2,letterSpacing: 0.3,marginLeft: 80}}>Room Type : <b style={{marginTop: 0,color: '#ddd',fontSize: 20,letterSpacing: 0.2,lineHeight: 1.5,marginLeft:10}}>{data.roomt}</b></h6>
      <input style={{margin:20}}type="date" min={date} max={mdate} onChange={(e) => setRDate(e.target.value)}/>
      <input style={{margin:20}} type="number" placeholder='No of Nights' onChange={(e) => setNFDate(e.target.value)}/>
      <button className='button-87' style={{marginLeft:'30%'}} onClick={submit}>Book Room Now</button>
      </div>
      <div className='column'>
      <div className='card' style={{borderColor:'black'}}> <img src={data.image4} alt='img' style={{height:340,width:"100%"}} />
        </div>
      </div>
      </div>
      </div>
  </div>

  )
}

export default Rooms1;