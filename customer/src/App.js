import './App.css';
import Navbar from './Navbar.js';
//import Login from './Login';
//import Register from './Register';
import ForgetPass from './ForgetPass';
import Register from './Register';
import ForgetPass2 from './ForgetPass2';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Login';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
