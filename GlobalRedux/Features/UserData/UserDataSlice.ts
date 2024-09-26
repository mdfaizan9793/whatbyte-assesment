'use client';
import { createSlice } from "@reduxjs/toolkit";

export interface UserDataState{
    Rank:number,
    Marks:number,
    Percentile: number
}

const initialState:UserDataState={
    Rank:5,
    Marks:14,
    Percentile:99,
}

export const UserDataSlice=createSlice({
    name:'UserData',
    initialState,
    reducers:{
        UpdateRank:(state,action)=>{
            state.Rank=action.payload
        },
        UpdateMarks:(state,action)=>{
            state.Marks=action.payload
        },
        UpdatePercentile:(state,action)=>{
            state.Percentile=action.payload
        }
    }
})

export const {UpdateRank,UpdatePercentile,UpdateMarks}=UserDataSlice.actions;

export default UserDataSlice.reducer;