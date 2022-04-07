import axios from 'axios';
import React,{useReducer,createContext,useContext,useState ,useEffect} from 'react';

import filterReducerFunc from '../reducer/filterReducerFunc';
import { useAuthorizer } from './AuthorizerContext';


const NotesContext = createContext();

const NotesProvider = ({children})=>{

    const initialNote ={
        title:"",
        description:"",
        priority:"none",
        color:"color-white",
        pinStatus:false,
        tags:[],
        createdDate:new Date() ,
        trashStatus:false
    }
    const initialFilterState = {
        sortBy : null,
        priority : [],
        label :{},
    }
    const { authState } =useAuthorizer();
    const [ note ,setNote ] =useState(initialNote);
    const [noteList , setNoteList] = useState([]);
    const [archiveList , setArchiveList] = useState([]);
    const [ labelArray , setLabelArray ] =useState([]);
  
   

 console.log(note);
    useEffect(()=>{

        (async()=>{
            try {
                const response = await axios.get("/api/notes",{headers:{authorization:authState.encodedToken}})
                console.log(response,"response");
            } catch (error) {
                console.error(error)
            }
            
        })();
    },[authState])


    console.log("note list",noteList);

    const getSortedFilter=(filterState , noteList)=>{
        if(filterState.sortBy === "NEWEST_ONE"){
            return [...noteList].sort((a,b)=>new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()  );
        }
        if(filterState.sortBy === "OLDEST_ONE"){
            return [...noteList].sort((a,b)=>new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()  );
        }
        return noteList;

    }
    const getFilterList=( filterState , sortedList ) => {

        return sortedList.filter((item) => filterState.priority.length === 0 ? item : filterState["priority"].includes(item.priority) )

    }
    const getLabelFilter=( filterState , filterList )=>{

        if(Object.keys(filterState.label).length === 0){
            return filterList
        }else if(Object.values(filterState.label).every((label)=> label === false )){
            return filterList
        }
        
        return filterList.filter( (item)=> item.tags.reduce((acc, curr) => {
            return acc || filterState.label[curr]
        }, false ))
    }


    const [filterState , filterDispatch ] = useReducer( filterReducerFunc , initialFilterState );
    console.log("from context", filterState);
    const sortedList = getSortedFilter( filterState , noteList );
    const filterList = getFilterList( filterState , sortedList );
    const finalFilterList = getLabelFilter( filterState, filterList );
    console.log("sorted List" , sortedList);
    console.log("filter List" , filterList);
    console.log("final list", finalFilterList);

    

    return<>
        <NotesContext.Provider value={{ note ,setNote ,finalFilterList , setNoteList ,initialNote,filterState , filterDispatch ,labelArray , setLabelArray ,archiveList , setArchiveList}}>
            {children}
        </NotesContext.Provider>
    </>
}

const useNotes =()=>useContext(NotesContext);

export{ useNotes , NotesProvider } ;
