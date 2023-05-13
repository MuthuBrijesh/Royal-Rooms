import React, {useEffect, useState} from 'react'
import './Cust.css';
import background from "./img/14.jpg";

const Cust = () =>{
    const [data,setData]=useState([]);
    const [email, setEmail] = useState("");
    useEffect (()=>{
      fetch("http://localhost:5000/custret", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data); 
      });
    });
    const emailid = (e) => {
      if(email!==""){
      sessionStorage.setItem("CustEmail",email);
      window.location.href='./CustDetails';
      alert("Here you GO!!!!!!");
      }
      else{
        alert("Please Select an Email");
      }
    }
    return(
        <div className='cust' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-100}}>
            <form  className='form6'><br></br>
                <h1>Select Customer</h1><br></br>
                <select id="m_count" name="m_count" onChange={(e) => setEmail(e.target.value)} required="required">
                  <option vallue="">Select an Email</option>
                { data.map((i)=>{
                  return (<option style={{backgroundColor:'black'}} value={i.email}>{i.email}</option>);
                  })
                }
                </select>
                <input type="submit" onClick={emailid}/>
            </form>
        </div>
    )
}
export default Cust;