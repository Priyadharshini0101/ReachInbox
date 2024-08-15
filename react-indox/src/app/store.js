import {configureStore} from '@reduxjs/toolkit'
import mailSlice from './mailSlice'
export const store = configureStore({
    reducer:{
        mails:mailSlice,
    }


})