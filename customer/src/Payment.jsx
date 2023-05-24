import React from 'react';
import './Payment.css';
import TextField from '@mui/material/TextField';
import { useState} from "react";

function Payment() {
  const [card,setCard]=useState("");
  var [expd,setExpDate]=useState("");
  const [cvv,setCvv]=useState("");
  const Regex = /^[0-9]*$/;
  expd = expd.split("-");
  const currDate = new Date().toLocaleDateString();
  var curr = currDate.split("/");
  curr = curr[0];
  const name = sessionStorage.getItem("CustName");
  const hname = sessionStorage.getItem("BHname");
  const phone = sessionStorage.getItem("CustPhone");
  const date123 = sessionStorage.getItem("BDate");
  const bookid = sessionStorage.getItem("BookID");
  const amount123 = sessionStorage.getItem("BAmount");
  const image = sessionStorage.getItem("BImage");
  function submit(){
    if(Regex.test(card) && card.length===16 && card!==""){
      if(Regex.test(cvv) &&  cvv.length===3 && cvv!==""){
        //if(expd[0]>=curr && expd[0]<13 && expd[0].length===2 && expd!=="" && expd[1].length===4 && expd[1]>2022 && expd[1]<2100){
          fetch("http://localhost:5000/pay", { method: "POST", crossDomain: true,
            headers: { "Content-Type": "application/json",
              Accept: "application/json", "Access-Control-Allow-Origin": "*", },
            body: JSON.stringify({bookid}),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "OK") {
                alert("Payment Succesfull");
                window.location.href="./Rooms";
              }else{
                console.log(data.status);
              }
            });
        //}else{
        //  alert("Format is MM-YYYY and year is less than 2100");
        //}
      }else{
        alert("Invalid Cvv");
      }  
    }else{
      alert("Invalid Card Number");
    }
  }
  return (
    <div className='Pay' style={{marginLeft:100,marginTop:100,height:500,fontFamily:'CerebriSans-Regular, -apple-system, BlinkMacSystemFont, Roboto'}}>    
    <div className='row' >
    <div className='column1' style={{boxShadow:' 0 16px 32px 0 rgba(0,0,0,0.2)'}}><h1 style={{textAlign:'center',fontSize:60,marginTop:-30}}><br></br><b>Order Details</b></h1><br></br><div className='row'>
    <div className='column'>
      <img src={image} alt="image" style={{marginLeft:'2%',height:'100%',width:'100%'}}/>
    </div>
    <div className='column' style={{marginLeft:'2%'}}>
      <h1><b>Name : {name}</b></h1>
      <h2><b>Hotel Name : {hname}</b></h2>
      <h3><b>Bookid : {bookid}</b></h3>
      <h3><b>Phone : {phone}</b></h3>
      <h3><b>Date : {date123}</b></h3>
      <h3><b>Amount : {amount123}</b></h3>
    </div></div>
        </div>
    <div className='column2' style={{marginLeft:'2%',boxShadow:' 0 16px 32px 0 rgba(0,0,0,0.2)'}}><h2 style={{textAlign:'center'}}><br></br>Payment Details</h2><br></br><br></br>
    <TextField id="outlined-basic" label="Card-Number" variant="outlined" style={{backgroundColor:'whitesmoke',marginLeft:'10%',width:'80%'}} onChange={(e) => setCard(e.target.value)}/><br></br><br></br>
    <TextField id="outlined-basic" label="CVV" variant="outlined" style={{backgroundColor:'whitesmoke',marginLeft:'10%',width:'80%'}} onChange={(e) => setCvv(e.target.value)}/><br></br><br></br>
    <TextField id="outlined-basic" label="MM-YYYY" variant="outlined" style={{backgroundColor:'whitesmoke',marginLeft:'10%',width:'80%'}} onChange={(e) => setExpDate(e.target.value)}/><br></br><br></br>
    <button className='button-87' style={{marginLeft:240}} onClick={submit}>Pay Now</button><br></br>
        </div>
      </div>
    </div>
  )
}

export default Payment