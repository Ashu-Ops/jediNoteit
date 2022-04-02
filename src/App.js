import MockMan from 'mockman-js';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from "./pages/home/Home";


function App() {
  return<>
  
     <Routes>
       <Route path="/mockman" element={<MockMan/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<Signup/>} />
     </Routes>

  </>
}

export default App;
