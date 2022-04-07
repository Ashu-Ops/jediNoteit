import React from 'react'
import {  FaArchive } from 'react-icons/fa'
import { NoteCard } from '../../components/card/NoteCard';
import { useAuthorizer } from '../../context/AuthorizerContext';
import { useNotes } from '../../context/NotesContext';
import '../trash/Trash.css'


export const Archive =()=> {
  
  const { archiveList } = useNotes();
  const { authState } =useAuthorizer();
 

  return <>
        
         { !authState.loginStatus ? <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade'>
                    <div> <FaArchive size={"10rem"} /> </div>
                    <div> <h2>Archives Notes you add appear here </h2> </div>
                    <div><h2>Please Login From Navbar </h2></div>
                  </div>      
          </div> :
          <div className='trash-note-container '>
            <div><h1> Archive Notes</h1></div>
           {archiveList.map((noteItem)=><div className='d-flex' key={noteItem._id}> <NoteCard noteItem={noteItem}  /> </div>)} 
          </div>}
  </>
}

