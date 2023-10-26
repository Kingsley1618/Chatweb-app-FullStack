import React from 'react'
import {db} from "@/config/firebase"
import { useSelector } from 'react-redux'
import { useAuth } from "@clerk/nextjs";
import dayjs from 'dayjs';
import { useUser } from "@clerk/nextjs";
import {AiOutlineClose} from "react-icons/ai"
import Image from 'next/image'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
export default function ChatMessage() {
  const {  userId, sessionId} = useAuth();
  const { isSignedIn, user } = useUser();
 
  const channelId = useSelector((state)=> state.channelId)
  const [messages] = useCollection(db?.collection("Channels")?.doc(channelId)?.collection("Messages")?.orderBy('timeStamp','asc'))
  function deleteChat(id) {
    db?.collection("Channels")?.doc(channelId)?.collection("Messages")?.doc(id).delete()
   }
  return (
    <div className='flex-1 flex flex-col gap-y-2 px-3' style={{overflowY:"auto"}}>
      {messages?.docs?.map((message)=> {
        return <div key = {message.id} className={`${userId === message?.data()?.id? "flex justify-end ms-auto": "flex justify-start me-auto"}  w-[100%] max-w-[250px] md:max-w-[400px]`}>
      <div className={`${userId === message?.data()?.id? "bg-green-400" : "bg-blue-400"} text-white bg-blue-400 py-1 px-2`} style ={{width:"fit-content", borderRadius:"10px 10px 0px 10px", whiteSpace:"normal", textOverflow:"initial"}}>
     <div className='flex gap-x-2 items-center'>  <Image src={user?.imageUrl} alt="profile" className="rounded-[50%] w-[30px] h-[30px]" height={50} width={50}/>
         
        
     {!user?.firstName && !user?.lastName ? <h1 className='font-black text-[black] text-[1rem]'>{message?.data()?.firstName} {message?.data()?.lastName}</h1> : <h1 className='font-black text-[black] text-[1rem]'>{user?.firstName} {user?.lastName}</h1>}
         
{userId && <AiOutlineClose className="ms-auto cursor-pointer text-[.6rem] text-black font-bold" onClick = {
  ()=> deleteChat(message.id)
}/> }
         </div>
         <p className='text-white text-[.8rem] whitespace-normal break-all font-bold'>{message?.data()?.text}</p> 
<p className='text-end text-[.6rem] text-white'>{dayjs(message?.data()?.timeStamp?.toDate()).format("hh:mm")}</p>
        </div>
          </div>
      })}
    </div>
  )
}
