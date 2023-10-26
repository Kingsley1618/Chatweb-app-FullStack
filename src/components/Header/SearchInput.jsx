import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {BsFilter} from "react-icons/bs"
export default function SearchInput(){

  return (
    <div className='flex-[1] w-[100%] relative bg-transparent'>
    <input type="text" className='w-[100%] outline-0 py-1  rounded-md px-3 bg-[rgb(93,61,94)] text-[.8rem] placeholder-white' placeholder='Search Group Chat' id="channelsearch" name = "channelsearch" />
    <BsFilter className='text-white absolute right-7 top-[5px] text-[1.3rem]'/>
    <AiOutlineSearch className='text-gray-300 absolute right-1 text-[1.2rem] top-[6px]'/>

   </div>
  )
}
