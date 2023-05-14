import React from 'react'
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Nav'>
            <ul>     
                <img src={logo} alt="Logo" /> 
                <h3>Royal Golden</h3>
                <Link to="./Login"><li>Login</li></Link>
                <Link to="./Register"><li>Register</li></Link> 
                <Link to="./Rooms"><li>Rooms</li></Link> 
                <Link to="./Rooms1"><li>RoomDetails</li></Link> 
            </ul>
        </div>
    )
}

export default Navbar