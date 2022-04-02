import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return <>
    <nav className='menu flex-space-btw' >          
        <Link className='menu__link gap-sm  pri-text-color text-center flex-center' to="">
            <i className='fas fa-jedi menu__link_logo pri-color ' ></i>
            <span className='menu__link_title text-center'>Jedi Notes</span>                              
        </Link>                            
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

export default Navbar;
