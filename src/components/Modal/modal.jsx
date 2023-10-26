'use client'
import React, { useState, useEffect } from 'react';
import {Button, Modal } from 'antd';

import { useModal } from '@/context/modalContext'
const PopupModal = () => {
    const {handleCancel,handleOk,isModalOpen, loading, channelInput, setChannelInput} = useModal()

const [btnable, setBtnable] = useState(true)
useEffect(()=> {
    if(!channelInput || channelInput?.trim().length <= 3) {
    setBtnable(true)
    } else {
        setBtnable(false)
    }
        },[channelInput])
  return (
    <>
     
      <Modal title="Add Channel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" disabled={btnable}  className='bg-blue-500' loading={loading} onClick={handleOk}>
          Add Channel
        </Button>
      ]}
      >
        <input type="text" onChange={(event)=> {
setChannelInput(event.target.value)
        }} value = {channelInput}  className='w-[100%] outline-0 my-5 ring-gray-300 ring-1 focus:shadow-md focus:ring-gray-300 focus:ring-2 p-2 rounded-md' placeholder='Add Channel'/>
      </Modal>
    </>
  );
};
export default PopupModal;