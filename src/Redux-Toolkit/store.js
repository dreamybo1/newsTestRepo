import { configureStore } from "@reduxjs/toolkit"
import {loginSlice, newsSlice} from "./slice"


export const store = configureStore({
    reducer:{
        login:loginSlice.reducer,
        news:newsSlice.reducer
    },

})