'use client'
import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./features/chatId/chatSlice";
export const store = configureStore({
    reducer : channelReducer
})