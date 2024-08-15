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

        deleteMail:(state,actiond) => {
           state.mails = []
        }
    },
    
})

export const {addMail,deleteMail} = mailSlice.actions
export default mailSlice.reducer