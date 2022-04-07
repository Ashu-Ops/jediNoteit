import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { NoteCard } from '../../components/card/NoteCard';
import { useAuthorizer } from '../../context/AuthorizerContext';
import { useNotes } from '../../context/NotesContext';
import './Trash.css';


export const Trash =()=> {

  const { finalFilterList } = useNotes();
  const { authState } =useAuthorizer();

  const trashNoteList = finalFilterList ? finalFilterList.filter((item)=>item.trashStatus === true ) :[];

  console.log("trashnote",trashNoteList)

  return <>
         { !authState.loginStatus ? <div className='wd-100'>
                  <div className='flex-center flex-col height-100 grey-shade'>
                    <div> <FaTrash size={"10rem"} /> </div>
                    <div> <h2>Trash Notes you add appear here </h2> </div>
                    <div><h2>Please Login From Navbar </h2></div>
                  </div>      
          </div> :
          <div className='trash-note-container '>
            <div><h1> Trash Notes</h1></div>
           {trashNoteList.map((noteItem)=><div className='d-flex' key={noteItem._id}> <NoteCard noteItem={noteItem}  /> </div>)} 
          </div>}
  </>
}

