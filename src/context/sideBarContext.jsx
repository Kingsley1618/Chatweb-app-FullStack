'use client'

import React, { useState, createContext, useContext } from 'react';

const SideBarContext = createContext()
export function SideBarProvider({children}) {
const [isOpen, setIsOpen] = useState(false)
function openHandler() {
setIsOpen(true)
}

function closeHandler() {
    setIsOpen(false)
}
     
return <SideBarContext.Provider value={{isOpen, setIsOpen, openHandler, closeHandler}}>{children}</SideBarContext.Provider>
}


export function useSideBar() {
    return useContext(SideBarContext)
}
