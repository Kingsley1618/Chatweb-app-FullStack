'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelId : "JsuWPU9QmMDTkSFw8jfy"
}

const channelSlice = createSlice({
    name : "channel",
    initialState,
    reducers : {
       selectId(state,action) {
        state.channelId = action.payload.id
       }
    }
})

export const ChannelActions = channelSlice.actions 
export default channelSlice.reducer;