import {RED,BLUE,YELLOW,PINK, LASTNAME}from './type'




export const setBLUE=()=>
{
    return{
        type:BLUE
    }
}

export const setRED=()=>
{
    return{
        type:RED
    }
}

export const setYELLOW=()=>
{
    return{
        type:YELLOW
    }
}

export const setPINK=()=>
{
    return{
        type:PINK
    }
}
    export const setLASTNAME=(inputl)=>
{
 
    return{
        type:LASTNAME,
        changel :{
            Lastname : inputl
        }

    }
}


