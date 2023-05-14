import './Register.css';
import { useState } from "react";

function Try1() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [cpass, setCPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [nation, setNation] = useState("");
    const Reg = /^[A-Za-z ]*$/;
    const Regex = /^[0-9]*$/;
    const Mail=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(Reg.test(fname)){
          if(Reg.test(lname)){
            if(Mail.test(email)){
            if(Regex.test(phone) && phone.length===10){
              if(address.length<=250){
                if(Regex.test(age) && age<200 && age>10){
                  if(gender!==""){
                    if(Reg.test(nation)){
                      if(pass===cpass){
                        alert("Register Succesfully")
                        window.location.href = "./login";
                        fetch("http://localhost:5000/cregister",{
                            method:"POST",
                            crossDomain:true,
                            headers:{
                             "Content-Type":"application/json",Accept:"application/json",
                             "Access-Control-Allow-Origin":"*",
                            },
                            body: JSON.stringify({
                                fname,
                                lname,
                                email,
                                phone,
                                address,
                                age,
                                gender,
                                nation,
                                pass,
                                cpass
                            }),
                          })
                          .then((res)=>res.json())
                          .then((data)=>{console.log(data,"UserRegister");
                          if (data.status === "ok") {
                            alert("Register Succesfully");
                          }
                          else{
                            alert("User Already Exist");
                          }
                        });
                      }else{
                        alert("Invalid Password or Confirm Password");
                      }
                    }else{
                      alert("Invalid Nation");
                    }
                  }else{
                    alert("Select any Gender");
                  }
                }else{
                  alert("Invalid Age");
                }
              }else{
                alert("The Address is exceed the Length of 250 words");
              }
            }
            else{
              alert("Invalid Phone Number");
            }
          }else{
            alert("Invalid Email ID");
          }
          }else{
            alert("Invalid Last Name");
          }
        }else{
          alert("Invalid First Name");
        }
    }
    return(
        <div className='Register'>
            <form onSubmit={handleSubmit}>
            <h3>Create Account</h3>
            <div className="row">
                <div className="col">
                <label className='fname'>First Name</label>
            <input type='text' className='fname' id='fname' name='fname' required="required" onChange={(e) => setFname(e.target.value)}/>
                <label className='Email'>Email</label>
            <input type='email' className='Email' id='email' name='email' required="required"  onChange={(e) => setEmail(e.target.value)}/>
            <label className='gender'>Gender</label>
            <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="">Select the Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather Not to Say">Rather Not to Say</option>
              </select>
            <label className='addr'>Address</label>
            <input type='text' className='addr' id='addr' name='addr' required="required" onChange={(e) => setAddress(e.target.value)}/>
            <label className='Pass'>Password</label>
            <input type='password' className='Pass' id='pass' name='pass' required="required" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="col">
                <label className='lname'>Last Name</label>
            <input type='text' className='lname' id='lname' name='lname' required="required" onChange={(e) => setLname(e.target.value)}/>
                <label className='phone'>Phone Number</label>
            <input type='text' className='phone' id='phone' name='phone' required="required" onChange={(e) => setPhone(e.target.value)}/>
            <label className='age'>Age</label>
            <input type='text' className='age' id='age' name='age' required="required" onChange={(e) => setAge(e.target.value)}/>
            <label className='nation'>Nationality</label>
            <input type='text' className='nation' id='nation' name='nation' required="required" onChange={(e) => setNation(e.target.value)}/>
            <label className='CPass'>Confirm Password</label>
            <input type='password' className='CPass' id='cpass' name='cpass' required="required" onChange={(e) => setCPassword(e.target.value)} />
                </div>
            </div>
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