import React, {useState} from "react";
import {AuthContext} from "./useAuth.js";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('auth_user')) || null
    );

    const setAuthenticatedUser = (userInfo) => {
        setUser(userInfo);

        if (userInfo) {
            localStorage.setItem('auth_user', JSON.stringify(userInfo));
        }else {
            localStorage.removeItem('auth_user');
        }
    }

    const logout = () =>{
        setUser(null);

        localStorage.removeItem('auth_user');
    }

    const value = {
        user,
        isAuthenticated: !!user,
        setAuthenticatedUser,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}