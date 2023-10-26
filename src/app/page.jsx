
import React from 'react'
import Header from "@/components/Header/Header"
import Chat from "@/components/Chat/chat"
export default function Home() {
  
   return(
    <div className='flex flex-col h-[100vh]'>
   <Header />
    
    <Chat />
    </div>
   )
}
