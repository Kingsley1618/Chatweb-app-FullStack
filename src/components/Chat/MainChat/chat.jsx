import React from 'react'
import ChatHeader from "./chatHeader"
import ChatInput from "./chatInput"
import ChatMessage from "./chatMessage"
export default function Mainchat() {
  return (
    <div className='flex-1 flex flex-col'>

<ChatHeader />

<ChatMessage />

<ChatInput />
    </div>
  )
}
