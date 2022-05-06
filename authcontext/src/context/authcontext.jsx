import { createContext , useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children})  =>{
    const [token, settoken] = useState(false)

    const Change = (x)=>{
        settoken(x)
    }
   
    return <CartContext.Provider value={{token,Change}}>
             {children}
        </CartContext.Provider>
}