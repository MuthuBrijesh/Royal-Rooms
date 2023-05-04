import './App.css';
import Navbar from './Navbar.js';
import Login from './Login';
import Register from './Register';
import ForgetPass from './ForgetPass';
import AddHotel from './AddHotel';
import AddRoom from './AddRoom';
import Home from './Home';
import CustDetails from './CustDetails';
import AdminDetails from './AdminDetails';
import Logout from './Logout';
import Customer from './Cust';
import Change from './Change';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  const Alogin=localStorage.getItem("AloggedIn");
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="" element={Alogin === "true"? <Home/> : <Login/>}/>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Forgetpass' element={<ForgetPass />}></Route>
          <Route path='/AddHotel' element={<AddHotel />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Customer' element={<Customer />}></Route>
          <Route path='/CustDetails' element={<CustDetails />}></Route>
          <Route path="/AddRoom" element={<AddRoom/>}/>
          <Route path='/AdminDetails' element={<AdminDetails />}></Route>
          <Route path='/Logout' element={<Logout />}></Route>
          <Route path='/Change' element={<Change />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
