import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [login, setLogin] = useState(false)
    const storage = JSON.parse(localStorage.getItem("s11g2"))

    return(
        <LoginContext.Provider value = {{login, setLogin, storage}}>
            {children}
        </LoginContext.Provider>
    )

}

export {LoginContext, LoginProvider}