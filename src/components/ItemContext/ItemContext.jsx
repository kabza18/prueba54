//react
import { useState, createContext } from "react";

export const ItemsContext = createContext();


export const ItemsProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


return (
    <ItemsContext.Provider value={{ cart, setCart }}>
        {children}
    </ItemsContext.Provider>
);
}
export default ItemsProvider

