import React from 'react'
import './ForgetPass.css';
import { Link } from 'react-router-dom'


function ForgetPass() {
    return (
        <div className='fp'>
            <div className='form2'>
            <div className='logi'>
                    <br></br><br></br>
                    <h3>Change Password</h3>
                </div>
                <br></br>
                <div className='values'>
                    <label className='Pass'>Password</label><br></br>
                    <input type='password' className='pass' id='pass' name='pass' placeholder='Enter the Password' required="required" />
                    <br></br>
                    <label className='CPass'>Confirm Password</label><br></br>
                    <input type='password' className='CPass' id='cpass' name='cpass' placeholder='Enter the Confirm Password' required="required" />
                    <Link to='../Login'><input type='submit' className='sub' /></Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPass