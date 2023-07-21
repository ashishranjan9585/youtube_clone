import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name : 'chat',
    initialState : {
        chatMessages : []
    },
    reducers : {
        addMessages : (state,action)=>{
            state.chatMessages.splice(20,1)
            state.chatMessages.unshift(action.payload)
        }
    }
})
export const{addMessages} = ChatSlice.actions;
export default ChatSlice.reducer;