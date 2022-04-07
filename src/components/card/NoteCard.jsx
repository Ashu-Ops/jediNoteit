import React ,{ useState } from 'react'
import {FaEdit ,FaTrash ,FaArchive,FaTrashRestore ,FaTrashAlt} from 'react-icons/fa';
import { MdArchive }  from 'react-icons/md';
import { BsPinFill , BsPin } from "react-icons/bs";
import { useNotes } from '../../context/NotesContext';
import axios from 'axios';
import { useAuthorizer } from '../../context/AuthorizerContext';
import './NoteCard.css';
import EditNoteCard from './EditNoteCard';


export const NoteCard =( {noteItem }  )=> {

  // const { _id , title ,description ,pinStatus ,color, tags, priority } = noteitem;
  console.log(noteItem.title);
  const { authState } = useAuthorizer();
  const { setNoteList } = useNotes();
  

  const updateNoteItem = async(changedNote,id ) =>{
    console.log( " changedNote " , changedNote ) ;
    try {
      const response = await axios.post(`/api/notes/${id}`,{note:changedNote},{headers:{authorization:authState.encodedToken}});
      console.log("update Note",response.data.notes);
      setNoteList(response.data.notes);
      
    } catch (error) {
      console.log("error");
    }
    
  }

  const deleteNote = async(id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`,{headers:{authorization:authState.encodedToken}});
      console.log("delete",response);
      setNoteList(response.data.notes);

    } catch (error) {
      console.log(error);
    }
  }




  const pinStatusHandler = (noteItem , id ) => {

    updateNoteItem({...noteItem , pinStatus : !noteItem.pinStatus } , id);
  }
  const tagStatusHandler =( noteItem , id) => {

    updateNoteItem({...noteItem , trashStatus : !noteItem.trashStatus } , id);
  }

  const [ showEdit , setShowEdit ] = useState(false);


  const editHandler=(e)=>{
    e.preventDefault();
    setShowEdit(true);
  }



  return <>
   
  
    <div className={` note-card-container flex-col pos-rel gap-sm ${noteItem.color}`}>
        <div><h3>{noteItem.title}</h3></div>

        <div dangerouslySetInnerHTML={{ __html: noteItem.description, }}/>

        <div className='note-card-tag-container' >
          {noteItem.tags.map((tag,index)=><div key={index} className="note-card-tag">{tag}</div> ) }
        </div> 

        <div className='note-card-icon-container' >
            <div>
              <FaEdit className='cur-pointer' size={"1.1rem"} onClick={(e)=> editHandler(e)}  />
            </div>
            <div className="note-card-tag">
            {noteItem.priority }
            </div>
            <div className=' d-flex  gap-sm '>
              <FaArchive size={"1.1rem"}/>
              {noteItem.trashStatus&&<FaTrashAlt className='cur-pointer' onClick={()=>deleteNote(noteItem._id) }  />}
           { noteItem.trashStatus ? <FaTrashRestore className='cur-pointer' onClick={()=> tagStatusHandler(noteItem,noteItem._id)} /> : <FaTrash className='cur-pointer' size={"1.1rem"}  onClick={()=> tagStatusHandler(noteItem,noteItem._id)} /> }  
            </div>
            </div>
        <div className='pos-abt cur-pointer note-card-pin' >
             {noteItem.pinStatus?  <BsPinFill onClick={() => pinStatusHandler(noteItem,noteItem._id) }  /> :<BsPin onClick={() => pinStatusHandler(noteItem,noteItem._id) } /> }
        </div>
    </div>
  { showEdit && <div className='note-edit-modal' >
     <div className='note-edit-notecard'><EditNoteCard noteItem={noteItem} setShowEdit={setShowEdit} updateNoteItem={updateNoteItem }   /> </div> 
    </div>}
  </>
}

//  