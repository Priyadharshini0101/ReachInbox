import {configureStore} from '@reduxjs/toolkit'
import mailSlice from './mailSlice'
import themeSlice from './themeSlice'
export const store = configureStore({
    reducer:{
        mails:mailSlice,
        themes:themeSlice

    }


})