import React from 'react';
import { useNotes } from '../../context/NotesContext';
import './Filter.css';
function Filter() {

    const { filterState , filterDispatch } = useNotes();
    const { labelArray } =useNotes();

  return <>
    <div className='filter-component'>

        <div className='flex-space-btw' ><h3>Filters</h3>

            <div><button onClick={()=> filterDispatch({ type:"CLEAR" })} >Clear</button> </div> 

        </div> 

        <div>
            <h4> Sort by Date </h4>
            <ul>

                <li> 
                    <label htmlFor='newest_one'>
                        <input type="radio" name='sort'  id='newest_one' checked={filterState.sortBy === "NEWEST_ONE"} 
                        onChange={()=> filterDispatch({type:"SORT" , payload : "NEWEST_ONE"}) }   /> Newest One
                    </label> 
                </li>

                <li> 
                    <label htmlFor='oldest_one'>
                        <input type="radio" name='sort'  id='oldest_one' checked={filterState.sortBy === "OLDEST_ONE"} 
                        onChange={()=> filterDispatch({type:"SORT" , payload : "OLDEST_ONE"}) }   /> Oldest One
                    </label> 
                </li>

            </ul>
            <h4> Filter by Priority </h4>
            <ul>

                {["Low","Medium","High"].map((item,index)=> <li key={index} > <label> <input type="checkbox" checked={filterState["priority"].includes(item) } 
                    onChange={ ()=> filterDispatch({ type:"PRIORITY" , payload : item }) }    /> {item} 
                </label> </li> )}

            </ul> 
            <h4> Filter by Label  </h4>
                <ul>
                {labelArray.map((item,index)=> <li key={index} > <label> <input type="checkbox" checked={filterState.label[item] } 
                    onChange={ ()=> filterDispatch({ type:"LABEL" , payload : item }) }    /> {item} 
                </label> </li> )}
                </ul>
        </div>    
    </div>
  
  </>
}

export default Filter;
