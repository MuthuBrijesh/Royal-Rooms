function Try1() {
    return(
        <div className='Login'>
            <form >
            <h3>Create Account</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" />
            <label className='Pass'>Confirm Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" />
            <br></br>
            <button>Submit</button>           
            </form>
          </div>
    )
}

export default Try1;

/**            <div class="row">
                <div class="col"><button>Log In</button></div>
                <div class="col"><button>Sign Up</button></div>
            </div><br></br> */