import { legacy_createStore as createstore } from "redux"
import { reducer } from "./todo/reducer"

export const store = createstore(reducer, {todo:[]})
