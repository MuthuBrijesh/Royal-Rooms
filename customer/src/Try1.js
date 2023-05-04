import './Register.css';
import background from "./img/8.jpg";
import './Try1.css';

function Try1() {
    return(
        <div className='Login'>
            <form >
            <div class="row">
                <div class="col"><button classname='upper' style={{backgroundColor:'#ffc9bb'}}>Log In</button></div>
                <div class="col"><button classname='upper' style={{backgroundColor:'#ffc9bb'}}>Sign Up</button></div>
            </div><br></br>
            <h3>Login</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" />
            <label className='Pass'>Confirm Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" />
            <br></br>
            <button>Log In</button>            <br></br>
            <button>Forgot Password</button>            
            </form>
          </div>
    )
}

export default Try1