import React from 'react'
import './Navbar.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom'

function Navbar() {
    const Alogin=sessionStorage.getItem("AloggedIn");
    if(Alogin === "true"){
    return (
        <div className='Nav'>
            <ul>     
                <img src={logo} alt="Logo" /> 
                <h3>Royal Golden Rooms</h3>
                <Link to="./Logout"><li>Logout</li></Link>
                <Link to="./AdminDetails"><li>Profile</li></Link>
                <Link to="./AddHotel"><li>Add Hotel</li></Link>
                <Link to="./Home"><li>Home</li></Link> 
                <Link to="./Customer"><li>Customer</li></Link>  
                <Link to="./AddRoom"><li>AddRoom</li></Link>
                <Link to="./Bookings"><li>AllBooking</li></Link>             
            </ul>
        </div>
    )
    }
    else{
        return (
            <div className='Nav'>
                <ul>     
                    <img src={logo} alt="Logo" /> 
                    <h3>Royal Golden Rooms</h3>
                    <Link to="./Login"><li>Login</li></Link>
                    <Link to="./Register"><li>Register</li></Link>            
                </ul>
            </div>
        )
    }
}

export default Navbar