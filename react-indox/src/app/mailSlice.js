import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    mails:[]
}

export const mailSlice = createSlice({
    name:'mail',
    initialState,
    reducers:{
        addMail:(state,action)=>{
        
             state.mails = action.payload
           },
    },
    
})

export const {addMail} = mailSlice.actions
export default mailSlice.reducer