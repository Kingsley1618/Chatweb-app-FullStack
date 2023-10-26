'use client'
import React,{useState} from 'react'
import {MdKeyboardVoice} from "react-icons/md"
import InputEmoji from "react-input-emoji"; 
import {BiSolidSend} from "react-icons/bi"
import {db} from "@/config/firebase"
import { useSelector } from 'react-redux'
import { useUser } from "@clerk/nextjs";

import firebase from "firebase/compat/app";
import { useAuth } from "@clerk/nextjs";

export default function ChatInput() {
    const [text, setText] = useState(""); 
    const {  userId, sessionId} = useAuth();
    const { isSignedIn, user } = useUser();
  
    const channelId = useSelector((state)=> state.channelId)
    function sendMessage() {
        db.collection("Channels").doc(channelId).collection("Messages").add({
           text,
           id: userId,
           photoUrl : user.imageUrl,
           firstName : user.firstName,
           lastName: user.lastName,
           email: user.emailAddresses[0].emailAddress,
           timeStamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setText("")
    }
    function handleOnEnter (text) {
        db?.collection("Channels")?.doc(channelId)?.collection("Messages").add({
            text,
            id: userId,
            photoUrl : user.imageUrl,
            firstName : user.firstName,
            lastName: user.lastName,
            email: user.emailAddresses[0].emailAddress,
            timeStamp : firebase.firestore.FieldValue.serverTimestamp()
         })
      }
  return (
    <div className='flex gap-x-1 w-[96%] mx-auto bg-gray-300 p-2 rounded-md mb-2 items-center'>

<InputEmoji 
      value={text} 
      onChange={setText} 
      cleanOnEnter
     onEnter = {handleOnEnter}
     keepOpened = {true}
      placeholder="Type a message"
    /> 
   
<BiSolidSend className="text-[1.5rem] cursor-pointer" onClick = {sendMessage}/>
    </div>
  )
}

