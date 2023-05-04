import React from 'react'


function ForgetPass() {
    const submit = (e) => {
        window.location.href = "./Forgetpass2";
    };
    return (
        <div className='Login'>
        <form >
        <h3>Change Password</h3>
        <label className='Email'>Email</label>
        <input type='email' className='Email' id='email' name='email' required="required" />
        <br></br>
        <button onClick={submit}>Submit</button><br></br>        
        </form>
      </div>
    )
}

export default ForgetPass