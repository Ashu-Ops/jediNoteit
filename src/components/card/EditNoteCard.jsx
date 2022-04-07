import React,{ useState } from 'react'
import ReactQuill from 'react-quill';


import './CreateNoteCard.css';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import LabelCard from './LabelCard';
import ColorPalette from './ColorPalette';

function EditNoteCard({noteItem ,setShowEdit ,updateNoteItem  }) {
    const initialEditNote ={
        title:"heelo",
        description:"mello",
        priority:"Low",
        color:"color-white",
        pinStatus:false,
        tags:["home"],
        createdDate: "",
        trashStatus:false
    }
    const [editNote , setEditNote] = useState(noteItem);
    console.log("editNote",editNote);
const updateEditNoteHandler =(editNote,id)=>{

    updateNoteItem(editNote,id);
    setShowEdit(false); 

}


  return <>
    <div className='create-note' >

        <div className={`create-note-container pos-rel ${editNote.color}`}>
                     
            <div> 
                <input className={`note-title ${editNote.color} `} type="text" placeholder="  Take notes....." value={editNote.title} onChange={(e)=>setEditNote({...editNote,title:e.target.value })} />
            </div>

            <div className='app'>
                <ReactQuill bounds={'.app'} value={editNote.description} onChange={(e)=>setEditNote({...editNote,description:e})} /> 
            </div>

            <div className='note-tag-container' >
                {editNote.tags.map((tag,index)=><div key={index} className='note-tag' >{tag}</div> ) }
            </div>

            <div className='note-property-div' >

                <div className='note-property'> 
                                
                    <LabelCard noteItem={editNote} setNoteItem={setEditNote}  />

                    <div>
                        <label htmlFor="tagDropdown">Priority :</label>
                        <select name="tagDropdown" value={editNote.priority} onChange={(e)=>setEditNote({...editNote,priority:e.target.value})}>
                        <option value="none">None</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>        
                        </select>
                    </div>
                    
                    <ColorPalette noteItem={editNote} setNoteItem={setEditNote}  />
                                  
                </div>

                <div className='note-property' >
                    <div><button className='note-btn' onClick={()=>updateEditNoteHandler(editNote,editNote._id)} > update</button></div>
                    <div><button className='note-btn' onClick={(e)=>{e.preventDefault(); setShowEdit(false); }  }> close </button></div>
                </div>
                            
            </div> 

        </div>

    </div>
  
  </>
}

export default EditNoteCard;
