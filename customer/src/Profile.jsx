import './Register.css';
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
    },[]);
    return(
        <div className='Register'>
            <form>
            <h3>Create Account</h3>
            <div className="row">
                <div className="col">
                <label className='fname'>First Name</label>
            <input type='text' className='fname' id='fname' name='fname' required="required" value={data.fname}/>
                <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required"  value={data.email}/>
            <label className='gender'>Gender</label>
            <input type='email' className='Email' id='email' name='email' required="required"  value={data.gender}/>
            <label className='addr'>Address</label>
            <input type='text' className='addr' id='addr' name='addr' required="required" value={data.address}/>
                </div>
                <div className="col">
                <label className='lname'>Last Name</label>
            <input type='text' className='lname' id='lname' name='lname' required="required" value={data.lname}/>
                <label className='phone'>Phone Number</label>
            <input type='text' className='phone' id='phone' name='phone' required="required" value={data.phone}/>
            <label className='age'>Age</label>
            <input type='text' className='age' id='age' name='age' required="required" value={data.age}/>
            <label className='nation'>Nationality</label>
            <input type='text' className='nation' id='nation' name='nation' required="required" value={data.nation}/>
                </div>
            </div>
            <br></br>         
            </form>
          </div>
    )
}

export default Try1;