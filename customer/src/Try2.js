import './Try2.css';
import background from "./img/17.jpg";

function Try2() {
    return(
            <div className='Login'>
            <form >
            <div class="row">
                <div class="col"><button classname='upper' style={{backgroundColor:'#ffc9bb'}}>Log In</button></div>
                <div class="col"><button classname='upper' style={{backgroundColor:'#ffc9bb'}}>Sign Up</button></div>
            </div><br></br>
            <h3>Login</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" />
            <br></br>
            <button>Log In</button>            <br></br>
            <button>Forgot Password</button>            
            </form>
          </div>
        
    )
}

export default Try2