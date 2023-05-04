import React, {useState} from 'react'
import './Cust.css';
import background from "./img/14.jpg";

const Cust = () =>{
    const [data,setData]=useState([]);
    const handleSubmit = (e) =>{
      fetch("http://localhost:5000/custret", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    })
      .then((res) => res.json())
      .then((data) => {  
        console.log("Hello")
        if(data.status==="OK"){
          setData(data.data);  
        }
        else{
          alert("No Result Found");
        } 
      });
    };
    function emailid(e){
      console.log(e);
    }
    handleSubmit;
    return(
        <div className='cust' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-100}}>
            <form  className='form6'><br></br>
                <h1>Select Customer</h1><br></br>
                  { data.map((i, index)=>{
                    return(
                      <div className='reti'>{i.email}<button onClick={emailid(index)}>View</button></div>
                    );
                  })
                  }
            </form>
        </div>
    )
}
export default Cust;