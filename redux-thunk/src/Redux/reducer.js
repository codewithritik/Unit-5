import { Form } from "./action";

const init = {
    registration:[],
    login:[]
};
export const Restration = (state = init,{type , payload})=>{
    switch(type){
        case Form:
            return {
                ...state, registration:[...state.registration , payload]
            }
    case "login":
        return {
            ...state, login: payload
             }
       default : 
            return state;
    }
};