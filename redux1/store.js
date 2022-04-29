import { legacy_createStore as createStore } from "redux"

const reducer = (store,action)=>{
    if(action.type === "ADD_TODO"){
        return {...store, counter:store.counter +action.payload}
    }
 return store
}


const initState= {
    counter :"ritik",
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


console.log(store.getState());
