import React ,{ useState } from 'react'
import './ColorPalette.css'
import { MdColorLens } from 'react-icons/md'

 
function ColorPalette( { noteItem ,setNoteItem  } ) {

const colorTray =[
    "color-white",
    "color-red",
    "color-orange",
    "color-yellow",
    "color-green",
    "color-teal",
    "color-blue",
    "color-purple",
]
    
    const [ showColor ,setShowColor ] = useState(false);
    const displayHandler=()=>{
        if(showColor===true){
            setShowColor(false)
        }else{
            setShowColor(true)
        }
    }
   
  return <>
    <div className='pos-rel'>
        <MdColorLens className='cur-pointer' size={"1.5rem"} onClick={displayHandler} />
       { showColor && <div className='palette-icon-div'>
                
            { 
            colorTray.map((item,index)=> <div key={index} className={` palette-color-div ${ item }`} 
            onClick={()=>{ setNoteItem({...noteItem, color: item })  }}  >
            </div>) 
             }                
                                           
                                            
        </div>}
    </div>
  </>
}

export default ColorPalette;
