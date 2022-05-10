const init = {
    todo : [],
}

export const TodoReducer = (state = init,{type , payload})=>{
     switch(type){
         case "ADD_TODO":
             return {
                 ...state,
                 todo : payload
             }
        default : 
             return state;
     }
}