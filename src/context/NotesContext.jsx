import React,{createContext,useContext,useState } from 'react';

const NotesContext = createContext();

const NotesProvider = ({children})=>{

    const initialNote ={
        title:"",
        description:"",
        priority:"",
        color:"",
        pinStatus:false,
        tags:[],
        createdDate: ""
    }
    
    const [ note ,setNote ] =useState(initialNote);
    const [ labelArray , setLabelArray ] =useState([]);
    const [bgColor,setBgColor] = useState("color-white");
console.log(note);


    return<>
        <NotesContext.Provider value={{ note ,setNote , labelArray , setLabelArray,bgColor,setBgColor  }}>
            {children}
        </NotesContext.Provider>
    </>
}

const useNotes =()=>useContext(NotesContext);

export{ useNotes , NotesProvider } ;
