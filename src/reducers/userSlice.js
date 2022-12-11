import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {}

export const storeUserInfo = createAsyncThunk("storeUserInfo", async (payload) => {
    console.log('storeUser', payload);

    try{
    const {data} = await axios.post('/api/users/create', payload);
    
    return data;
    }catch(err){
        console.log("Couldn't store user!", err)
    }
}) 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
    signOut : (state,action) =>{
            state = action.payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(storeUserInfo.fulfilled, (state,action) => {
            state = action.payload;
            return state;
        }
        )
    }
});

export const currentUser = (state) => {
    return state.user
};

export default userSlice.reducer;