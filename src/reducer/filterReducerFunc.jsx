import React from 'react';



const filterReducerFunc =( filterState , filteraction )=> {
    const { type , payload } = filteraction;
    switch( filteraction.type ){
        case "SORT":
            return {...filterState , sortBy : filteraction.payload};
        case "PRIORITY":
            if(filterState.priority.includes(filteraction.payload)){
                return {...filterState , priority: filterState.priority.filter((item)=> item !== filteraction.payload )}
            };
            return {...filterState , priority:[...filterState.priority , filteraction.payload]};
        case "LABEL":
            if(filterState.label.hasOwnProperty( filteraction.payload ) ){
                return {...filterState, label:{...filterState.label,[filteraction.payload]: !filterState.label[filteraction.payload] }}
            }else{
                return {...filterState, label:{...filterState.label, [filteraction.payload]: true }}
            }
        case "CLEAR":
            return {
                sortBy : null,
                priority : [],
                label : [],
            }
        default:
            return filterState;
    }
    
}

export default filterReducerFunc;
