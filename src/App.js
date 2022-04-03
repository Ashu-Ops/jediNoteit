import MockMan from 'mockman-js';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from './components';
import Layout from './layout/Layout';
import {Login , Signup , Home , Archive , MyNotes , Trash , Label} from './pages/index';



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
