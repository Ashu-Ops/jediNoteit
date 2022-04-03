import MockMan from 'mockman-js';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Archive from './pages/archive/Archive';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from "./pages/home/Home";
import Label from './pages/label/Label';
import MyNotes from './pages/mynotes/MyNotes';
import Trash from './pages/trash/Trash';


function App() {
  return<>
    <div className='App'> 

     <Routes>
       <Route path="/mockman" element={<MockMan/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/mynotes" element={<MyNotes/>} />
        <Route path="/archive" element={<Archive/>} />
        <Route path="/label" element={<Label/>} />
        <Route path="/trash" element={<Trash/>} />
     </Routes>
     
</div>
  </>
}

export default App;
