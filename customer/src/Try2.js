import background from "./14.jpg";
import './Try2.css';

function Try2() {
    return(
        <div className='Login' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-88}}>
            <form>
            <h3>Login Here</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" />
            <br></br>
            <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Log In'/>
            <br></br>
            <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Forgot Password'/>
            </form>
          </div>
    )
}

export default Try2