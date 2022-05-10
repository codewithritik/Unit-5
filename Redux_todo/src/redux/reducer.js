export const Reduxer  = (store,action)=>{
        switch(action.type){
                case "ADD_todo":
                    return {...store, todo:[...store.todo , action.payload]}
                   // return {...store, counter:store.counter +action.payload};
                    default:
                    return store
           }
    
};
