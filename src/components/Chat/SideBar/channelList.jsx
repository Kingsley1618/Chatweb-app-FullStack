'use client'
import React,{useEffect} from 'react'
import styles from "./channel.module.css"
import {db} from "@/config/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { ChannelActions } from '@/redux/features/chatId/chatSlice'
import { useCollection } from 'react-firebase-hooks/firestore'
export default function ChannelList() {
    const dispatch = useDispatch()
    const channelId = useSelector((state)=> state.channelId)
    const [channel] = useCollection(db?.collection("Channels").orderBy('timeStamp', 'asc'))
  return (
    <div className={`${styles.channel} flex flex-col select-none gap-y-2  px-3 py-3`}>
{channel?.docs?.map((doc)=> {
    return <div key = {doc?.id} className={`${doc.id === channelId? "bg-[black]": null} flex gap-x-3 select-none text-white font-bold py-2 hover:bg-[black]  rounded-md px-2 cursor-pointer`} onClick={()=> {dispatch(ChannelActions.selectId({id:doc.id}))}}>
     <h1>#</h1>   <h1 className='select-none'>{doc?.data()?.channelName}</h1>
        </div>
})}


    </div>
  )
}
