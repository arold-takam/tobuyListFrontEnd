import React, {useState} from "react";
import {AuthContext} from "./useAuth.js";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const setAuthenticatedUser = (userInfo) => {
        setUser(userInfo);
    }

    const logout = () =>{
        setUser(null);
    }

    const value = {
        user,
        isAuthenticated: !!user,
        setAuthenticatedUser,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}