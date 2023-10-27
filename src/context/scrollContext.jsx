'use client'

import React, { useState, createContext, useContext, useRef } from 'react';

const ScrollContext = createContext()
export function ScrollProvider({children}) {
const lastDiv = useRef(null)
function scrollHandler() {
lastDiv.current.scrollIntoView({behavior : "smooth"})
}


return <ScrollContext.Provider value={{lastDiv, scrollHandler}}>{children}</ScrollContext.Provider>
}


export function useScrolltoView() {
    return useContext(ScrollContext)
}
