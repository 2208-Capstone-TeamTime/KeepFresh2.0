import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsId: []
}
// const initialState = []

export const addReceipt = createAsyncThunk('addReceipt', async (payload) => {
  const { data } = await axios.post('/api/receipts', payload)
  return data
})

export const fetchExpProducts = createAsyncThunk("fetchExpProducts", async() => {
  try{
    const { data } = await axios.get(`/api/products/${product.name}/exp`)
    console.log(data)
    return data
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
            const item = state.productsId.find((p) => p === action.payload.name);
            if (item) {
              item.quantity++;
            } else {
              let newItem = { ...action.payload };
              newItem.quantity = 1;
              state.productsId.push(newItem);
            }  
            return state;
        }
    },
    extraReducers: (builder) => {
      builder.addCase(addReceipt.fulfilled, (state, action) => {
        state.productsId.push(action.payload)
      }), 
      builder.addCase(fetchExpProducts.fulfilled,(state, action) => {
        state.productsId = action.payload
      })
    }
  
});

export const selectReceipt = (state) => {
    return state.receipt.productsId;
}

export const { add2Receipt } = receiptSlice.actions;

export default receiptSlice.reducer;
