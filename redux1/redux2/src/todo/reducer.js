import {ADD_TODO } from "./action";

const init = { todo:[]}
export const TodoReducer = (store=init , {type,payload})=>{
    switch(type) {
        
        case ADD_TODO:
            return {...store, todo:[...store.todo, payload]}
            default:
                return store
    }

}