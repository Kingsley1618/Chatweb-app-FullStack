import React from 'react'
import {db} from "@/config/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import {RiMessage2Fill} from "react-icons/ri"
import SideBarHeader from '../SideBar/header'
import ChannelList from '../SideBar/channelList'
import styles from "./chatHeader.module.css"
import {FaBarsStaggered} from "react-icons/fa6"
import { useSideBar } from '@/context/sideBarContext'
export default function ChatHeader() {
  const {isOpen,openHandler, closeHandler}=  useSideBar()
    const channelId = useSelector((state)=> state.channelId)
    const [channelHeader] = useDocument(db?.collection("Channels")?.doc(channelId))
  return (
    <>
   {isOpen ? <div className={`${styles.overlay} sm:hidden z-[1]`} onClick={closeHandler}>

    </div> : null }

   {isOpen? <div className={`${styles.overlaymenu} sm:hidden z-[99999]`}>
<SideBarHeader />

<ChannelList />
</div> : null }


    <div className='bg-[rgb(53,13,54)] flex justify-between py-2 px-4'>
<h1 className='font-[900] md:text-[1.3rem] text-[1rem] text-white'>{channelHeader?.data()?.channelName}</h1>

<RiMessage2Fill  className="text-[1.3rem] sm:flex hidden text-white cursor-pointer"/>

<FaBarsStaggered className="text-[1.3rem] sm:hidden flex text-white cursor-pointer" onClick = {openHandler}/>
    </div>
    <hr className='border-t-[2px] border-white'/>
    </>
  )
}
