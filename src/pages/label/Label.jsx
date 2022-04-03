import React from 'react'
import { MdLabel } from "react-icons/md" ;

export const Label=()=> {
  return <>
          <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <MdLabel size={"10rem"} /> </div>
                    <div> <h2>Label Notes you add appear here </h2> </div>
                  </div>      
          </div>
  </>
}

