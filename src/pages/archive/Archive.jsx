import React from 'react'
import {  FaArchive } from 'react-icons/fa'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function Archive() {
  return <>
  <Navbar/>
  <div className='d-flex' >
        <Sidebar/>

          <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade'>
                    <div> <FaArchive size={"10rem"} /> </div>
                    <div> <h2>Archive you add appear here </h2> </div>
                  </div>      

          </div>

  </div>
  </>
}

export default Archive;
