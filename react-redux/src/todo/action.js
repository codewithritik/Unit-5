export const ADD_todo= "todolist"

export const Tododaction  = (data)=> {
    return {
        type : ADD_todo,
        payload : data
    }
}