import React from 'react'
import {db} from "@/config/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import {RiMessage2Fill} from "react-icons/ri"
export default function ChatHeader() {
    const channelId = useSelector((state)=> state.channelId)
    const [channelHeader] = useDocument(db?.collection("Channels")?.doc(channelId))
  return (
    <>
    <div className='bg-[rgb(53,13,54)] flex justify-between py-2 px-4'>
<h1 className='font-[900] md:text-[1.3rem] text-[1rem] text-white'>{channelHeader?.data()?.channelName}</h1>

<RiMessage2Fill  className="text-[1.3rem] text-white cursor-pointer"/>
    </div>
    <hr className='border-t-[2px] border-white'/>
    </>
  )
}
