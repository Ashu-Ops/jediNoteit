import React from 'react';
import { FaTrash } from 'react-icons/fa'


export const Trash =()=> {
  return <>
          <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade'>
                    <div> <FaTrash size={"10rem"} /> </div>
                    <div> <h2>Trash Notes you add appear here </h2> </div>
                  </div>      
          </div>
  </>
}

