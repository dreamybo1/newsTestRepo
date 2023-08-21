import { createSlice } from "@reduxjs/toolkit";
import { storeConstants } from "../Constants/constants";

const initialState ={
    logged: storeConstants.LOGGED,
    login: storeConstants.LOGIN,
    password: storeConstants.PASSWORD,
    newsArray: storeConstants.NEWSARRAY

}

export const loginSlice = createSlice({
    name:"mainStore",
    initialState,
    reducers:{
        loggedSetter(state,action){
            localStorage.setItem("logged",action.payload)
            state.logged = action.payload
        },
        loginSetter(state,action){
            state.login = action.payload
        },
        passwordSetter(state,action){
            state.password = action.payload
        }
    }
})

export const newsSlice = createSlice({
    name:"newsStore",
    initialState,
    reducers:{
        newsArraySetter(state,action){
            state.newsArray = action.payload
        }
    }
})

export const { loggedSetter, loginSetter, passwordSetter } = loginSlice.actions
export const {newsArraySetter} = newsSlice.actions
