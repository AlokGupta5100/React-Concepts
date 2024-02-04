import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authentication, setAuthentication] = useState(false);

    const login = () => {
        setAuthentication(true)
    }

    const logout = ()=> {
        setAuthentication(false)
    }

    return(
        <AuthContext.Provider value={{authentication,login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const AuthComponent = () => {
    const {authentication, login, logout} = useContext(AuthContext)

    return(
        <div>
            <p>User is {authentication ? "authenticated" : "not authenticated"}</p>
            <button onClick={login}>Login</button>  
            <button onClick={logout}>Logout</button>    
        </div>
    )
}

function UserAuthentication(){
    return(
        <AuthProvider>
            <AuthComponent/>
        </AuthProvider>
    )
}
export default UserAuthentication;