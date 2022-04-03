
import React from 'react'
import NoteCard from '../../components/card/NoteCard';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { CgNotes} from "react-icons/cg"

function MyNotes() {

  return<>
  <Navbar/>
  {/* d-flex wd-100 height-100 style={{ display:"flex " }} style={{ width:"100%", }} style={{ height:"100%" ,color:"#E6E6E6" }} */}
  <div className='d-flex' >
        <Sidebar/>

          <div className='wd-100' >
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <CgNotes size={"10rem"} /> </div>
                    <div> <h2>Notes you add appear here </h2> </div>
                  </div>      

          </div>

  </div>
  </>
}

export default MyNotes;
