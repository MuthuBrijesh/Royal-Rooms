import './Profile.css';
import { useState,useEffect } from "react";

function Try1() {
    const [data,setData]=useState([]);
    useEffect (()=>{
      const email =sessionStorage.getItem("ctoken");
      fetch("http://localhost:5000/custt", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({ email}),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);    
      });
    });
    return(
        <div className='Regi'>
            <form  style={{boxShadow:' 0 16px 32px 0 rgba(0,0,0,0.2)',backgroundColor:'whitesmoke'}}>
            <h3 style={{fontSize:50}}>Profile</h3>
            <div className="row">
                <div className="col">
                <label className='fname'>First Name : {data.fname}</label>
                <label className='Email'>Email : {data.email}</label>
            <label className='gender'>Gender : {data.gender}</label>
            <label className='addr'>Address : {data.address}</label>
                </div>
                <div className="col">
                <label className='lname'>Last Name : {data.lname}</label>
                <label className='phone'>Phone Number : {data.phone} </label>
            <label className='age'>Age : {data.age}</label>
            <label className='nation'>Nationality : {data.nation}</label>
                </div>
            </div>
            <br></br>         
            </form>
          </div>
    )
}

export default Try1;