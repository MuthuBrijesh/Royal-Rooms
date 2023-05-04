import React from 'react'


function ForgetPass2() {
    return (
        <div className='Login'>
        <form >
        <h3>Change Password</h3>
        <label className='Email'>OTP</label>
        <input type='email' className='Email' id='email' name='email' required="required" />
        <label className='Email'>Password</label>
        <input type='email' className='Email' id='email' name='email' required="required" />
        <label className='Email'>Confirm Password</label>
        <input type='email' className='Email' id='email' name='email' required="required" />
        <br></br>
        <button>Submit</button><br></br>        
        </form>
      </div>
    )
}

export default ForgetPass2