import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import './CreateNoteCard.css';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

import LabelCard from './LabelCard';
import { useNotes } from '../../context/NotesContext';
import ColorPalette from './ColorPalette';



function CreateNoteCard() {

    const { note,bgColor } =useNotes();

  return <>
  
    <div className='create-note' >

                  <div className={`create-note-container ${bgColor}`}>
                     
                        <div> 
                            <input className={`note-title ${bgColor} `} type="text" placeholder="  Take notes....." />
                        </div>

                        <div className='app'>
                            <ReactQuill bounds={'.app'}  /> 
                        </div>
                        <div className='note-tag-container' >

                            {note.tags.map((tag,index)=><div key={index} className='note-tag' >{tag}</div> ) }

                        </div>    
                      <div className='note-property-div' >

                            <div className='note-property'> 
                                
                                <LabelCard/>

                                {/* drop down for priority */}
                                <div>
                                    <label htmlFor="tagDropdown">Priority :</label>
                                    <select name="tagDropdown">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                    </select>
                                </div>

                                <ColorPalette/>
                                  
                            </div>

                            <div className='note-property' >
                                <div><button className='note-btn'> add</button></div>
                                <div><button className='note-btn'> close </button></div>
                            </div>
                            
                      </div> 
                    </div>


    </div>
            
  
  </>
}

export default CreateNoteCard;
