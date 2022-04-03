import React from 'react'
import { Sidebar } from '../components';

function Layout({ children }) {
  return <>
    <div className='d-flex' >
        <Sidebar/>
        { children }
    </div>
  
  </>
}

export default Layout;
