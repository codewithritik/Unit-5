import { legacy_createStore as createstore, combineReducers } from "redux";
import { CounterReducer } from "./counter/reducer";
import { TodoReducer } from "./todo/reducer";

const Combine = combineReducers({
    ritik : CounterReducer,
    todohh : TodoReducer,
});



export const store = createstore(Combine,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

console.log(store.getState())