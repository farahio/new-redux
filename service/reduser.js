import {RED , BLUE , PINK , YELLOW, LASTNAME}  from './type'


const initialState = {
    color: 'purple',
    name:'Name',
    Lastname:''
}


 function  reducer ( state =  initialState , action ) {
switch(action.type){
    case RED: 
    return{
        color:'red',
        name:'Ali',
        Lastname:state.Lastname
      
       
        
        
    };
    case BLUE:
    return{
        color:'blue',
        name:'Mamad',
        Lastname:state.Lastname
     
   
    };
    case PINK:
    return{
        color:'pink',
        name:'Mina',
        Lastname:state.Lastname
   
    };
    case YELLOW:
    return{
        color:'yellow',
        name:'Jafar',
        Lastname:state.Lastname
        
        
    };
    case LASTNAME:
    return{
       Lastname:action.changel.Lastname
        
    };
   
    default :
    return state;
}
}

export default reducer;