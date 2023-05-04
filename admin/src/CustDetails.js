import React, { useEffect ,useState} from 'react';
import './CustDetails.css';
import background from "./img/13.jpg";

const CustDetails = () =>{
    const [data,setData]=useState([]);
    useEffect (()=>{
      const email =localStorage.getItem("Cust");
      fetch("http://localhost:5000/custt", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({email}),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data); 
      });
    },[]);
    return (
        <div className='custdetails'  style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-100}}>
        <form className='form1'>
          <h3>Customer Details</h3>
          <div className='row'>
        <div className='column'>
                <label className='fname'>First Name</label>
                <input type='text' className='fname' id='fname' name='fname' placeholder='First Name' required="required" value={data.fname}/>
                <label className='email'>Email</label>
                <input type='email' className='email' id='email' name='email' placeholder='Email' required="required" value={data.email}/>
                <label className='pnumber'>Phone Number</label>
                <input type='text' className='pnumber' id='pnumber' name='pnumber' placeholder='Phone Number' required="required" value={data.phone}/>
                <label className='address'>Address</label>
                <input type='text' className='address' id='address' name='address' placeholder='Address' required="required" value={data.address}/>
                </div>
        <div className='column'>
        <label className='lname'>Last Name</label>
                <input type='text' className='lname' id='lname' name='lname' placeholder='Last Name' required="required" value={data.lname}/>
                <label className='age'>Age</label>
                <input type='number' className='age' id='age' name='age' placeholder='Age' required="required" value={data.age}/>
                <label className='gender'>Gender</label>
                <input type='text' className='gender' id='gender' name='gender' placeholder='gender' required="required"  value={data.gender}/>
                <label className='nation'>Nationality</label>
                <input type='text' className='nation' id='nation' name='nation' placeholder='Nationality' required="required" value={data.nation}/>
                </div>
                </div>
        </form>
      </div>
    )
}

export default CustDetails;