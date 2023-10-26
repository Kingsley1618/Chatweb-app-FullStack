'use client'
import React,{useState} from 'react'
import {IoMdAdd} from "react-icons/io"
import { useModal } from '@/context/modalContext'
import { useSideBar } from '@/context/sideBarContext'
export default function SideBarHeader() {
 const {showModal} = useModal()
 const {closeHandler} = useSideBar()
  return (
    <div className='flex justify-between bg-[rgb(53,13,54)] items-center py-3 px-3'>
<h1 className='font-black text-white'>Add Channel</h1>

<IoMdAdd className="text-[1.7rem] bg-gray-500 p-1 rounded-[50%] cursor-pointer" onClick={
  ()=> {
    showModal()
    closeHandler()
  }
  }/>
    </div>
  )
}
