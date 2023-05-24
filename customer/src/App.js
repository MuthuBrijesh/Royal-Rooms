import './App.css';
import Navbar from './Navbar.js';
import ForgetPass from './ForgetPass';
import Register from './Register';
import ForgetPass2 from './ForgetPass2';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Rooms from './ListofRooms';
import Rooms1 from './RoomsDetails';
import Profile from './Profile';
import Logout from './Logout';
import Payment from './Payment';
import Booking from './Bookings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />   
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Forgetpass' element={<ForgetPass />}></Route>
          <Route path='/Forgetpass2' element={<ForgetPass2 />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Rooms' element={<Rooms />}></Route>
          <Route path='/Rooms1' element={<Rooms1 />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/Logout' element={<Logout />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          <Route path='/Booking' element={<Booking />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
