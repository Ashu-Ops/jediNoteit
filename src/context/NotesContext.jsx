import axios from 'axios';
import React,{createContext,useContext,useState ,useEffect} from 'react';
import { useAuthorizer } from './AuthorizerContext';


const NotesContext = createContext();

const NotesProvider = ({children})=>{
    const { authState } =useAuthorizer();
    const initialNote ={
        title:"",
        description:"",
        priority:"none",
        color:"",
        pinStatus:false,
        tags:[],
        createdDate: "",
        trashStatus:false
    }
    
    const [ note ,setNote ] =useState(initialNote);
    const [ labelArray , setLabelArray ] =useState([]);
    const [bgColor,setBgColor] = useState("color-white");
    const [noteList , setNoteList] = useState([]);

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



    return<>
        <NotesContext.Provider value={{ note ,setNote , labelArray , setLabelArray,bgColor,setBgColor ,noteList , setNoteList ,initialNote }}>
            {children}
        </NotesContext.Provider>
    </>
}

const useNotes =()=>useContext(NotesContext);

export{ useNotes , NotesProvider } ;
