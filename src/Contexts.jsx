import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children}) => {
    const [ip, setIp] = useState('')
    const [mask, setMask]= useState('')
    const [subnets, setSubnets] = useState()
    const [results, setResults] = useState([])
    
    const values = {
        ip, setIp,
        mask, setMask,
        subnets, setSubnets,
        results, setResults,
    }

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}