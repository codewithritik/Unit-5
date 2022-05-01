import { ADD_COUNT } from "./action";

const init = 0
export const CounterReducer = (store=init , {type,payload})=>{
    switch(type) {
        case ADD_COUNT :
            return {...store, counter:store +payload}
            default:
                return store
    }

}