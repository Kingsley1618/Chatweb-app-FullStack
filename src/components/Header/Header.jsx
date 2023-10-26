import React from 'react'
import SearchInput from "./SearchInput"
import {BiTime} from "react-icons/bi"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import { UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <div className='flex bg-[rgb(53,13,54)] gap-x-4 min-h-[7vh]  items-center px-3'>
        <div className='lg:flex-[.25] flex-[.2] md:flex hidden'></div>
        <div className='flex-[1] flex gap-x-4 items-center ps-2'>
            
<SearchInput />
</div>

<div className='md:flex-[.3] flex justify-end items-center gap-x-4'>
    <AiOutlineQuestionCircle className="text-white text-[1.4rem]"/>
   <h1>
    <UserButton afterSignOutUrl="/sign-in" />
    </h1>
</div>
    </div>
  )
}
