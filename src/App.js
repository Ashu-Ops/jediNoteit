import MockMan from 'mockman-js';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from './components';
import Layout from './layout/Layout';
// import Navbar from './components/navbar/Navbar';
// import Archive from './pages/archive/Archive';
import {Login , Signup , Home , Archive , MyNotes , Trash , Label} from './pages/index';
// import Signup from './pages/auth/Signup';
// import Home from "./pages/home/Home";
// import Label from './pages/label/Label';
// import MyNotes from './pages/mynotes/MyNotes';
// import Trash from './pages/trash/Trash';


function App() {
  return<>
    <div className='App'> 
      <Navbar/>
     <Routes>
       <Route path="/mockman" element={<MockMan/>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/mynotes" element={ <Layout> <MyNotes/> </Layout>} />
        <Route path="/archive" element={ <Layout> <Archive/> </Layout> } />
        <Route path="/label" element={ <Layout> <Label/> </Layout> } />
        <Route path="/trash" element={ <Layout> <Trash/> </Layout> } />
     </Routes>
     
</div>
  </>
}

export default App;
