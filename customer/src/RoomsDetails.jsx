import React from 'react';
import './RoomsDetails.css';
import { useState ,useEffect} from "react";

function Rooms1() {
  //Date Validation
  const currDate = new Date().toLocaleDateString();
  var curr = currDate.split("/");
  if(curr[0]<9){
    curr[0]='0'+curr[0];
  }
  var [bookid,setBookID]=useState("");
  curr[3]=(parseInt(curr[2])+1).toString();
  var date =curr[2]+'-'+curr[0]+'-'+curr[1];
  var mdate = curr[3]+'-'+curr[0]+'-'+curr[1];
  const [rdate,setRDate]=useState("");
  var [nfdate,setNFDate]=useState("");
  const Regex = /^[0-9]*$/;
  //Room Data
  const [data,setData]=useState([]);
  //Hotel Data
  const [hotel,setHotel]=useState([]);
  useEffect (()=>{
  const _id=sessionStorage.getItem("hotelid");
  fetch("http://localhost:5000/roomsd", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
    Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify({_id}),
  })
  .then((res) => res.json())
  .then((data) => {
    setData(data.data);
    fun();
  });
});
useEffect (()=>{
  fetch("http://localhost:5000/countbooking", { method: "POST", crossDomain: true,
  headers: { "Content-Type": "application/json",
    Accept: "application/json", "Access-Control-Allow-Origin": "*", },
  body: JSON.stringify(),
})
  .then((res) => res.json())
  .then((data) => {
    setBookID(data.data);
  });
});
bookid =parseInt(bookid);
bookid =(bookid + 300000).toString();
function fun(e) {
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
        console.log(data.status);
      }
    });
  };
  var cost = parseInt(data.cost);
  var nf = parseInt(nfdate);
  var amount =( cost * nf);
  amount = amount.toString();
  const name =sessionStorage.getItem("CustName");
  const phone =sessionStorage.getItem("CustPhone");
  const hname = data.hotel;
  const image = data.image1;
  const payment=null;
  console.log(bookid);
  sessionStorage.setItem("BAmount",amount);
  sessionStorage.setItem("BHname",hname);
  sessionStorage.setItem("BImage",image);
  sessionStorage.setItem("BNG",nfdate);
  sessionStorage.setItem("BDate",rdate);
  sessionStorage.setItem("BookID",bookid);
  function submit(){
    if(rdate!==""){
      if(Regex.test(nfdate) && nfdate!==""){
        fetch("http://localhost:5000/addbooking", { method: "POST", crossDomain: true,
        headers: { "Content-Type": "application/json",
          Accept: "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify({name,hname,phone,rdate,nfdate,image,amount,bookid,payment}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "OK") {
            alert("Booked Succesfully");
            window.location.href="./Payment";
          }else{
            alert("Error");
            console.log(data.status);
          }
        });
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