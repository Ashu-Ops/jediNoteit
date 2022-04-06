
import React from 'react'
import {CgNotes} from 'react-icons/cg'
import CreateNoteCard from '../../components/card/CreateNoteCard';
import { NoteCard } from '../../components/card/NoteCard';
import { useAuthorizer } from '../../context/AuthorizerContext';
import { useNotes } from '../../context/NotesContext';


export const  MyNotes=()=> {
  const { authState } = useAuthorizer();
  const { noteList } =useNotes(); 
    const filterNoteList = noteList ? noteList.filter((item) => item.trashStatus === false) : [] ;
    const pinNoteList = filterNoteList ? filterNoteList.filter((item) => item.pinStatus === true ): [] ;
    const otherNoteList = filterNoteList ? filterNoteList.filter((item) => item.pinStatus === false ):[] ;

  console.log("from notes", noteList );

  return<>
         { !authState.loginStatus ? <div className='wd-100' >
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <CgNotes size={"10rem"} /> </div>
                    <div> <h2>Notes you add appear here </h2> </div>
                    <div><h2>Please Login From Navbar </h2></div>
                  </div>      

          </div> :
          <div  className="wd-100 " >

            <CreateNoteCard/>
      
                            <div className='wd-100' >

                             {pinNoteList.length >0 && <div >
                                <h2>pinned</h2> 
                                <div style={{ display:"flex", flexWrap:"wrap" }}>
                                { pinNoteList.map( (noteItem)=> <NoteCard noteItem={ noteItem } key={ noteItem._id } />) }
                                </div>
                              </div>
                              }     
                              <div >
                               { pinNoteList.length > 0 ? <h2>others</h2> : <h2> Notes </h2>   }  
                                <div className='d-flex-wrap'>
                                { otherNoteList.map( (noteItem)=> <NoteCard noteItem={ noteItem } key={ noteItem._id } />) }
                                </div>
                              </div>
                            </div> 
          </div>}
  </>
}

