import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { useSidebar } from '../../context/SidebarContext';

export const Navbar=()=> {

    const { hamburgHandler } = useSidebar();
    const { pathname } = useLocation();

  return <>
    <nav className='menu flex-space-btw bx-shadow' >  

    <div className='d-flex'>  
                
        { (pathname!=="/" && pathname!=="/login" && pathname!=="/signup" )&& <div className='flex-center ham ham-icon'  onClick={ hamburgHandler} ><FaBars /></div> }
        
        <Link className='menu__link gap-sm  pri-text-color text-center flex-center' to="/">
            <i className='fas fa-jedi menu__link_logo pri-color ' ></i>
            <span className='menu__link_title text-center'>Jedi Notes</span>                              
        </Link> 

    </div>

        <div className='menu__container gap-lg flex-space-btw '>
            <div className='menu__container_link cur-pointer'>
                <Link className='login_link pri-text-color'to="/login">Login</Link>
            </div>
            <div className='menu__container_btn flex-center pri-bg-color '>
                <button className='theme_btn cur-pointer'> <i className="fas fa-moon"></i> </button> 
            </div>  
        </div>
      </nav>
  </>
}

