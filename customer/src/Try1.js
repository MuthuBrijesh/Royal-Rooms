import './Register.css';
import background from "./img/8.jpg";
import './Try1.css';

function Try1() {
    return(
        <div className='Register' style={{ backgroundImage: `url(${background})`, height:800,backgroundSize: 'cover',marginTop:-88}}>
            <form>
            <h3>Sign Up Here</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' placeholder='Enter the Email-ID' required="required" />
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' placeholder='Enter the Password' required="required" />
            <label className='Pass'>Confirm Password</label>
            <input type='password' className='CPass' id='cpass' name='cpass' placeholder='Enter the Confirm Password' required="required" />
            <br></br>
            <input type='submit' className='sub' style={{color:'black',backgroundColor:'#ffffff'}} value='Sign Up'/>
            <br></br>
            </form>
          </div>
    )
}

export default Try1