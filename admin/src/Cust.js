import React, {useEffect, useState} from 'react'
import './Cust.css';
import background from "./img/14.jpg";

const Cust = () =>{
    const [data,setData]=useState([]);
    useEffect (()=>{
      fetch("http://localhost:5000/custret", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json"},
    })
      .then((res) => res.json())
      .then((data) => { 
        if(data.status==="OK"){
          setData(data.data);  
        }
        else{
          alert("No Result Found");
        } 
      });
    });
    function emailid(e){
      console.log(e);
    }
    return(
        <div className='cust' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-100}}>
            <form  className='form6'><br></br>
                <h1>Select Customer</h1><br></br>
                  { data.map((i)=>{
                    return(
                      <div className='reti'><button onClick={()=>emailid(i.email)}>{i.email}</button></div>
                    );
                  })
                  }
            </form>
        </div>
    )
}
export default Cust;