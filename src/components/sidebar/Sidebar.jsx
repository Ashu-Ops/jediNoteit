import React ,{ useState } from 'react';
import "./Sidebar.css"
import {  FaArchive , FaTrash , FaBars ,FaStickyNote} from 'react-icons/fa'
import { MdLabel } from "react-icons/md"
import { NavLink, useNavigate } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';


export const Sidebar=()=> {

const data = [
    {
        title: "My Notes",
        icon : <FaStickyNote/>,
        link :"/mynotes"
    },
    {
        title: "Archives",
        icon :  <FaArchive/>,
        link :"/archive"
    },
    {
        title: "Labels",
        icon : <MdLabel/>,
        link :"/label"
    },
    {
        title: "Trash",
        icon : <FaTrash/>,
        link :"/trash"
    },
]

const { showSidebar  } = useSidebar();

const navigator = useNavigate();

  return <>
    <div className={ showSidebar ? "mini-sidebar" :"sidebar"  }>
        <ul className='sidebarlist grey-shade'>
           
            { data.map((item,key)=> <NavLink  className={ ({isActive})=> isActive ? "pri-bg-color" : "" } to={`${item.link}`} style={{ color:'inherit' }} key={key} > 
                                        <li  className={ `row flex-center ${showSidebar ? "" : " item-title"} `}  > 
                                            <div className='side-icon'>  
                                                <div className={` icon-div flex-center ${ showSidebar ? "item-icon" :"" }`} > {item.icon}  </div>   
                                            </div> 
                                            <div className={ showSidebar ?  "hidden ": "side-title" }  > {item.title }</div> 
                                        </li>
                                    </NavLink> 
            )}
        </ul>
    </div>
  </>
}

