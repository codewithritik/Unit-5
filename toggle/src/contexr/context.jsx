import { createContext , useState } from "react";

export const CartContext = createContext()


export const CartContextProvider = ({ children})  =>{
    const [Theme, setTheme] = useState("light")

    const Change = (x)=>{
        setTheme(x)
    }
    console.log(Theme)
    return <CartContext.Provider value={{Theme,Change}}>
             {children}
        </CartContext.Provider>
}