import './App.css';
import Navbar from './Navbar.js';
//import Login from './Login';
//import Register from './Register';
import ForgetPass from './ForgetPass';
import Try1 from './Try1';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Try2 from './Try2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />   
        <Routes>
          <Route path='/login' element={<Try2 />}></Route>
          <Route path='/Register' element={<Try1 />}></Route>
          <Route path='/Forgetpass' element={<ForgetPass />}></Route>
  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
