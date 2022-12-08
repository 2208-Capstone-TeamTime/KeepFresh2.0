import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsId: [],
  exp: []
}
// const initialState = []

export const fetchReceipts = createAsyncThunk('fetchReceipts', async () => {
  const { data } = await axios.get('/api/receipts');
  return data;
})

export const addReceipt = createAsyncThunk('addReceipt', async (payload) => {
  const { data } = await axios.post('/api/receipts', payload)
  return data
})

export const fetchExpProducts = createAsyncThunk("fetchExpProducts", async (payload) => {
  try {
    const { data } = await axios.get(`/api/products/${payload}/exp`)
    return data
  }
  catch (error) {
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
    },
    deleteItem: (state, action) => {
      const item = state.productsId.find((p) => p === action.payload.name)
      if (item) {
        let idx = item.findIndex();
        state.productsId.splice(idx, 1);
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReceipts.fulfilled, (state, action) => {
      console.log("fetch state", state)
      console.log("fetch products in receipt", state.productsId)
      console.log("fetch action pyaload", action.payload)
    }),
      builder.addCase(addReceipt.fulfilled, (state, action) => {
        state.productsId.push(action.payload)
      }),
      builder.addCase(fetchExpProducts.fulfilled, (state, action) => {
        state.exp.push(action.payload);
      })
  }
});

export const selectReceipt = (state) => {
  return state.receipt.productsId;
};

export const selectExp = (state) => {
  return state.receipt.exp;
};

export const { add2Receipt, deleteItem } = receiptSlice.actions;

export default receiptSlice.reducer;