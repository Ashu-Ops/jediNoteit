import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { MdLabel } from "react-icons/md" ;

function Label() {
  return <>
  <Navbar/>
  <div className='d-flex' >
        <Sidebar/>

          <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <MdLabel size={"10rem"} /> </div>
                    <div> <h2>Label Notes you add appear here </h2> </div>
                  </div>      

          </div>

  </div>
  </>
}

export default Label;
