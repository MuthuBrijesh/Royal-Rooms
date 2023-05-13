import './Try2.css';
import { useState} from "react";

function Try2() {
  const [email,setEmail] = useState("");
  const [password,setpass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/clogin", { method: "POST", crossDomain: true,
      headers: { "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({ email, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userRegister");
        if (data.status === "ok") {
          sessionStorage.setItem("ctoken", data.data);
          sessionStorage.setItem("CloggedIn", "true");
          window.location.href = "./Home";
        }
        else{
          alert("Invalid Credentials");
        }
      });
  }
  const submit = (e) => {
    window.location.href = "./Forgetpass";
  };
    return(
            <div className='Login'>
            <form >
            <h3>Login</h3>
            <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required" onChange={(e) => setEmail(e.target.value)}/>
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" onChange={(e) => setpass(e.target.value)}/>
            <br></br>
            <button onClick={handleSubmit}>Log In</button><br></br>
            <button onClick={submit}>Forgot Password</button>            
            </form>
          </div>
        
    )
}

export default Try2