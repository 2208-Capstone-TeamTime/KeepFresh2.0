import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   productsId: []
// }
const initialState = []

export const addReceipt = createAsyncThunk('addReceipt', async (payload) => {
  const { data } = await axios.post('/api/receipts', payload)
  return data
})

export const fetchExpProducts = createAsyncThunk("fetchExpProducts", async(payload) => {
  try{
    const { data } = await axios.get(`/api/products/${payload}/exp`)
    console.log(data)
    return await data
  }
  catch(error){
    console.log("Couldn't fetch exp products!", error)
  }
})



const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        add2Receipt: (state, action) => {
            const item = state.find((p) => p === action.payload.name);
            if (item) {
              item.quantity++;
            } else {
              let newItem = { ...action.payload };
              newItem.quantity = 1;
              state.push(newItem);
            }  
            return state;
        }
    },
    extraReducers: (builder) => {
      builder.addCase(addReceipt.fulfilled, (state, action) => {
        state.push(action.payload)
      }), 
      builder.addCase(fetchExpProducts.fulfilled,(state, action) => {
        console.log('fetchExp payload', action.payload);
        return action.payload
      })
    }
  
});

export const selectReceipt = (state) => {
    return state.receipt;
}

export const { add2Receipt } = receiptSlice.actions;

export default receiptSlice.reducer;
