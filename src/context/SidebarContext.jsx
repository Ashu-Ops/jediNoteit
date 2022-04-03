import React ,{ useState ,createContext ,useContext }  from 'react';


const SidebarContext = createContext();

const SidebarProvider =({children}) => {
    const [ showSidebar , setShowSidebar ] = useState(false);

    
    const hamburgHandler = (e)=>{
        e.preventDefault();
        if(showSidebar===true){
        setShowSidebar(false) ;
        }else{
            setShowSidebar(true) ;
        }
        
    }
    console.log(showSidebar);

    return<>
        <SidebarContext.Provider value={{ showSidebar , hamburgHandler ,setShowSidebar }}>
            {children}
        </SidebarContext.Provider>
    </>
}

const useSidebar = ()=>useContext(SidebarContext);

export { useSidebar , SidebarProvider };