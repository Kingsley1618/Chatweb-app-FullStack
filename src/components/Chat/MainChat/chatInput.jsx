'use client'
import React,{useState, useEffect} from 'react'

import {BiSolidSend} from "react-icons/bi"
import {db} from "@/config/firebase"
import { useSelector } from 'react-redux'
import { useUser } from "@clerk/nextjs";
import { useScrolltoView } from '@/context/scrollContext'
import firebase from "firebase/compat/app";
import { useAuth } from "@clerk/nextjs";

export default function ChatInput() {
    const [text, setText] = useState(""); 
    const [buttonEnabled, setButtonEnabled] = useState(true); 
    const {  userId, sessionId} = useAuth();
    const {scrollHandler} = useScrolltoView()
    const { isSignedIn, user } = useUser();
    useEffect(()=> {
        if(!text || text?.trim().length <= 1) {
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }
            },[text])
    const channelId = useSelector((state)=> state.channelId)
    function sendMessage() {
        scrollHandler()
        db.collection("Channels").doc(channelId).collection("Messages").add({
           text,
           id: userId,
         photoUrl : user?.imageUrl,
           firstName : user.firstName,
           lastName: user.lastName,
           email: user.emailAddresses[0].emailAddress,
           timeStamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setText("")
        
    }
 
  return (
    <div className='flex gap-x-1 min-h-[6vh] sm:relative fixed bottom-0 right-0 left-0  w-[96%] mx-auto bg-gray-300 p-2 rounded-md py-2 items-center'>

<input type="text" className="w-[100%] bg-[transparent] flex-1 outline-0" placeholder='Chat' value = {text} onChange = {(event)=> {setText(event.target.value)}}/>
   
<button type="button" className={`bg-gray-400 rounded-full p-[5px] ${buttonEnabled ? "opacity-25" : "opacity-100"}`} disabled={buttonEnabled} onClick = {sendMessage}><BiSolidSend className="text-[1.5rem]" /></button>
    </div>
  )
}

