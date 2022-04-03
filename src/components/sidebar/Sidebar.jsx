import React ,{ useState } from 'react';
import "./Sidebar.css"
import {  FaArchive , FaTrash , FaBars ,FaStickyNote} from 'react-icons/fa'
import { MdLabel } from "react-icons/md"
import { NavLink, useNavigate } from 'react-router-dom';


function Sidebar() {

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

const [ showSidebar , setShowSidebar ] = useState(false);

    const hamburgHandler = (e)=>{
        e.preventDefault();
        if(showSidebar===true){
        setShowSidebar(false) ;
        }else{
            setShowSidebar(true) ;
        }
        
    }
    console.log(showSidebar);

const navigator = useNavigate();

  return <>
    <div className={ showSidebar ? "mini-sidebar" :"sidebar"  }>
        <ul className='sidebarlist grey-shade'>
            <li className={ `row flex-center ${showSidebar ? "" : " item-title"} `}  onClick={ hamburgHandler}> 
                <div className='side-icon' >
                    <div className={` icon-div flex-center cur-pointer ${ showSidebar ? "item-icon" :"" }`} > 
                        <FaBars />
                    </div>  
                </div>
                <div className={ showSidebar ?  "hidden ": "side-title" } > 
                    Menu 
                </div> 
            </li>        
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

export default Sidebar;
