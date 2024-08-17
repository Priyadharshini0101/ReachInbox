import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    mode:""
}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        addTheme:(state,action)=>{
             state.mode = action.payload
           },
    },
    
})

export const {addTheme} = themeSlice.actions
export default themeSlice.reducer