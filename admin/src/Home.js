import background from "./img/15.jpg";
import React, {useEffect, useState} from 'react'
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import pic from './img/p1.jpg';
import pic1 from './img/p2.jpg';
import pic2 from './img/p3.jpg';
import pic3 from './img/p4.jpg';
import pic4 from './img/p5.jpg';
import pic5 from './img/p6.jpg';
import pic6 from './img/p7.jpg';

const Home = () => {
  const [data,setData]=useState([]);
  const submit = (e) => {
    window.location.href = "./AddRoom";
  };
  const submit1 = (e) => {
    window.location.href = "./AddHotel";
  };
  const submit2 = (e) => {
    window.location.href = "./AdminDetails";
  };
  const submit3 = (e) => {
    window.location.href = "./Customer";
  };
  useEffect (()=>{
    fetch("http://localhost:5000/details", { method: "POST", crossDomain: true,
    headers: { "Content-Type": "application/json",
      Accept: "application/json", "Access-Control-Allow-Origin": "*", },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data); 
    });
  });
  return (
    <div style={{backgroundColor:'#F0F0E1'}}>
      <div className='home' style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover', height:850}}>
        <div className='edit'>
        <h1>Enjoy a Luxury Experience </h1>
        <h2>in</h2>
        <h1>Royal Golden Rooms</h1>
        <button className='button-87' style={{marginLeft:270,marginTop:50}} onClick={submit}> Book Now </button></div>
      </div>
      <div style={{backgroundColor:'#e7dac7',marginLeft:250,marginRight:270,marginTop:50}}>
      <div class="row" style={{color:'#e7dac7'}}>
        <div class="col" style={{height:300}}>
            <h1 style={{color:'#937047',marginLeft:100,marginTop:70,fontSize:50}}>Click Here to </h1>
            <button className='button-87' style={{marginLeft:140,marginTop:50,width:200}} onClick={submit1}> Add Hotel </button>
        </div>
        <div class="col">
        <img src={pic4} alt='Pic1' style={{height:300,width:500}}/>
        </div>
      </div>
      <div class="row" style={{color:'#e7dac7'}}>
        <div class="col">
        <img src={pic5} alt='Pic2' style={{height:300,width:500}}/>
        </div>
        <div class="col" style={{height:300}}>
        <h1 style={{color:'#937047',marginLeft:80,marginTop:70,fontSize:50}}>Click Here to </h1>
        <button className='button-87' style={{marginLeft:120,marginTop:50,width:200}} onClick={submit2}> View Profile </button>
        </div>
      </div>
      <div class="row" style={{color:'#e7dac7',marginLeft:50}}>
        <div class="col" style={{height:300,backgroundColor:'#e7dac7'}}>
            <h1 style={{color:'#937047',marginLeft:50,marginTop:70,fontSize:50}}>Click Here to </h1>
            <button className='button-87' style={{marginLeft:100,marginTop:50,width:200}} onClick={submit3}> View Customer </button>
        </div>
        <div class="col">
        <img src={pic6} alt='Pic3' style={{height:300,width:500}}/>
        </div>
      </div>
      </div>
      <div className='edit1'>
        <div className='c'>
        <h1  style={{marginTop:30,marginBottom:30,fontSize:50}}>Gallery</h1>
        <Carousel > 
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100"
          src={pic}
          alt="First slide"  style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic1}
          alt="Second slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Third slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Fourth slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic4}
          alt="Fifth slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic5}
          alt="Sixth slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Seventh slide" style={{height:700}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Second slide" style={{height:700}}
        />
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </div>
  )
}
export default Home;