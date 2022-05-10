import { legacy_createStore as createstore } from "redux"
import { Reduxer } from "./redux/reducer"


export const Store = createstore(Reduxer, {todo:[]})
