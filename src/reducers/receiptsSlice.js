import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        add2Receipt: (state, action) => {
            const item = state.find((p) => p === action.payload.name);
            if (item) {
              item.quantity++;
            } else {
              let newItem = { ...action.payload.name };
              newItem.quantity = 1;
              state.push(newItem);
            }  
            return state;
        }
    },
  
});

export const selectReceipt = (state) => {
    return state.receipt;
}

export const { add2Receipt } = receiptSlice.actions;

export default receiptSlice.reducer;
