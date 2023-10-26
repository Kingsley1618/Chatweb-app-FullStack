'use client'

import React, { useState, createContext, useContext } from 'react';
import {AddChannel} from "../utils/addChannelUtils"
const ModalContext = createContext()
export function ModalProvider({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [channelInput, setChannelInput] = useState()
    const [loading, setLoading] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setIsModalOpen(false);
          setChannelInput("")
          AddChannel(channelInput)
        }, 3000);
      };
return <ModalContext.Provider value={{isModalOpen,loading, channelInput, setChannelInput, setLoading, setIsModalOpen, showModal, handleOk,handleCancel}}>{children}</ModalContext.Provider>

}

export function useModal() {
    return useContext(ModalContext)
}
