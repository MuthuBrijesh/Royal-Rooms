import './Try2.css';
import background from "./img/17.jpg";

function Try2() {
  const submit = (e) => {
    window.location.href = "./Forgetpass";
  };
    return(
            <div className='Login'>
            <form >
            <h3>Login</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" />
            <br></br>
            <button>Log In</button>            <br></br>
            <button onClick={submit}>Forgot Password</button>            
            </form>
          </div>
        
    )
}

export default Try2