'use client'
import React from 'react'
import Sidebar from "@/components/Chat/SideBar/sidebar"
import Mainchat from "@/components/Chat/MainChat/chat"
import PopupModal from "../Modal/modal"
export default function Chat() {
  return (
    <div className='flex-1 flex overflow-y-hidden mt-[7vh]'>
<Sidebar />
<Mainchat />
<PopupModal />
    </div>
  )
}
