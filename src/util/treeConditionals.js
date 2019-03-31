


export function valueConditions(term,location)  {
    if(term && location){
        return ('termTrue_locationTrue');
    } 
    
    if (!term && location){
        return ('termFalse_locationTrue')
    }

    if (term && !location){
        return('termTrue_locationFalse')
    }
    
    if (!term && !location){
        return('termFalse_locationFalse')
    }
    
}
     


