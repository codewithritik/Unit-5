
import { ADD_todo } from "./action"

export const reducer = (store,action)=>{
    switch(action.type){
         case ADD_todo:
             return {...store, todo:[...store.todo , action.payload]}
            // return {...store, counter:store.counter +action.payload};
             default:
             return store

    }
}
