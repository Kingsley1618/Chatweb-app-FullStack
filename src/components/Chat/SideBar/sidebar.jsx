import SideBarHeader from './header'
import React from 'react'
import ChannelList from "./channelList"

export default function Sidebar() {
   
  return (
    <div className='bg-[rgb(53,13,54)] lg:max-w-[300px] md:max-w-[280px] sm:max-w-[250px] sm:flex flex-col hidden w-[100%]'>
<SideBarHeader />

<ChannelList />
    </div>
  )
}
