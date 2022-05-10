import { legacy_createStore as createstore, combineReducers } from "redux";
import { Restration } from "./Redux/reducer";





export const store = createstore(Restration )

console.log(store.getState())