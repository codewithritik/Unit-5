import { legacy_createStore as createStore } from "redux"

const reducer = (store,action)=>{
    switch(action.type){
        case "ADD_COUNT" :
         return {...store, counter:store.counter +action.payload};
         case "ADD_TODO":
             return {...store, todo:[...store.todo , action.payload]}
            // return {...store, counter:store.counter +action.payload};
             default:
             return store

    }
}
   
        


const initState= {
    counter : 0,
    todo : ""
}


const store = createStore(reducer, initState)

console.log(store.getState());

// let button = document.querySelector("button")
// button.addEventListener("click", myfunction)

// let x ;
// function myfunction(){
//  x = document.querySelector("input").value;

// };

store.dispatch({
    type:"ADD_TODO",
    payload:"rohit"
});
store.dispatch({
    type:"ADD_COUNT",
    payload:2
});

const Addcount  =  (t)=>{
 return {
     type:"ADD_COUNT",
     payload: t
 }

} 


console.log(store.getState());

store.dispatch(Addcount(3));

console.log(store.getState());