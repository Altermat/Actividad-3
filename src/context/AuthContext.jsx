import React, {useState, useEffect, createContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ( props ) => {
    const { children } = props

    const data = {
        user: 'cesar',
        login: () => console.log('login'),
        logout: () => console.log('logout'),
        upDateUser: () => console.log('update user')
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>)
    }