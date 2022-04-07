
import React ,{useState} from 'react'
import {CgNotes} from 'react-icons/cg'
import CreateNoteCard from '../../components/card/CreateNoteCard';
import { NoteCard } from '../../components/card/NoteCard';
import { useAuthorizer } from '../../context/AuthorizerContext';
import { useNotes } from '../../context/NotesContext';
import { FaFilter } from 'react-icons/fa';
import Filter from '../../components/filter/Filter';
import './MyNotes.css'

export const  MyNotes=()=> {
  const { authState } = useAuthorizer();
  const { finalFilterList } =useNotes(); 
    const filterNoteList = finalFilterList ? finalFilterList.filter((item) => item.trashStatus === false) : [] ;
    const pinNoteList = filterNoteList ? filterNoteList.filter((item) => item.pinStatus === true ): [] ;
    const otherNoteList = filterNoteList ? filterNoteList.filter((item) => item.pinStatus === false ):[] ;

  console.log("from notes", finalFilterList );
  const [showFilter, setShowFilter] =useState(false);



  return<>
         { !authState.loginStatus ? <div className='wd-100' >
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <CgNotes size={"10rem"} /> </div>
                    <div> <h2>Notes you add appear here </h2> </div>
                    <div><h2>Please Login From Navbar </h2></div>
                  </div>      

          </div> :
          <div  className="wd-100 " >
            <div className='d-flex' style={{ justifyContent:"center" }}>   
              <CreateNoteCard/>
              <div className='filter-icon'> 
                <FaFilter size={"1.5rem"} color={"gray"}  onClick={ ()=>setShowFilter((prev)=> !prev) } />
                 
               
              </div>
            {showFilter && <div className='filter-container' > <Filter /> </div> } 
              
            </div>  
           
      
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

