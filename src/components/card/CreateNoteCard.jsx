import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { BsPin , BsPinFill } from 'react-icons/bs';

import './CreateNoteCard.css';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

import LabelCard from './LabelCard';
import { useNotes } from '../../context/NotesContext';
import ColorPalette from './ColorPalette';
import { useAuthorizer } from '../../context/AuthorizerContext';
import axios from 'axios';



function CreateNoteCard() {

    const { note,setNote , noteList , setNoteList ,initialNote} =useNotes();
    const { authState } =useAuthorizer();

    
const addNote = async (note)=>{
    try {
        const response = await axios.post("/api/notes",{note},{headers:{authorization:authState.encodedToken}})
        console.log("post note",response.data.notes);
        setNoteList(response.data.notes);
        setNote(initialNote);


    } catch (error) {
       console.error(error);
    }
        
    }

  return <>
  
    <div className='create-note' >

                  <div className={`create-note-container pos-rel ${note.color}`}>
                     
                        <div> 
                            <input className={`note-title ${note.color} `} type="text" placeholder="  Take notes....." value={note.title} onChange={(e)=>setNote({...note,title:e.target.value })} />
                        </div>

                        <div className='app'>
                            <ReactQuill bounds={'.app'} value={note.description} onChange={(e)=>setNote({...note,description:e})} /> 
                        </div>
                        <div className='note-tag-container' >

                            {note.tags.map((tag,index)=><div key={index} className='note-tag' >{tag}</div> ) }

                        </div>    
                      <div className='note-property-div' >

                            <div className='note-property'> 
                                
                                <LabelCard noteItem={note} setNoteItem={setNote}  />

                                <div>
                                    <label htmlFor="tagDropdown">Priority :</label>
                                    <select name="tagDropdown" value={note.priority} onChange={(e)=>setNote({...note,priority:e.target.value})}>
                                    <option value="none">None</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    
                                    </select>
                                </div>

                                <ColorPalette noteItem={note} setNoteItem={setNote}  />
                                  
                            </div>

                            <div className='note-property' >
                                <div><button className='note-btn' onClick={()=>{addNote(note);  setNote(initialNote);  }} > add</button></div>
                                <div><button className='note-btn'> close </button></div>
                            </div>
                            
                      </div> 

                        <div className='pos-abt note-pin' >
                        { note.pinStatus ? <BsPinFill onClick={()=>setNote({...note, pinStatus: false }) } /> : <BsPin onClick={()=>setNote({...note, pinStatus:true}) } /> }
                        </div>


                    </div>


    </div>
            
  
  </>
}

export default CreateNoteCard;
