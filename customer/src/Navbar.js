import React from 'react'
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'

function Navbar() {
    const Alogin=sessionStorage.getItem("CloggedIn");
    if(Alogin === "true"){
    return (
        <div className='Nav'>
            <ul>     
                <img src={logo} alt="Logo" /> 
                <h3>Royal Golden Rooms</h3>
                <Link to="./Rooms"><li>Rooms</li></Link>
                <Link to="./Profile"><li>Profile</li></Link> 
                <Link to="./Logout"><li>Logout</li></Link>  
                <Link to="./Booking"><li>MyBooking</li></Link>          
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