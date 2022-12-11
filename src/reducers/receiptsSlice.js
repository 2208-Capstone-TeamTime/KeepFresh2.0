import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  exp: []
}

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
      const item = state.products.find((p) => p.name === action.payload.name);
      if (item) {
        item.quantity++;
      } else {
        let newItem = { ...action.payload };
        newItem.quantity = 1;
        state.products.push(newItem);
      }
      return state;
    },
    deleteItem: (state, action) => {
      const item = state.products.find((p) => p.name === action.payload.name)
      if (item) {
        let idx = item.findIndex();
        state.products.splice(idx, 1);
      }
      return state;
    },

    changeProperty: (state, action) => {
      console.log('change prop');
      const item = state.products.find((p) => p.name === action.payload.name)

      if (item.fridge === undefined) {
        let idx = item.findIndex();

        let newItem = {...item}
        newItem.fridge = true;
        state.products.splice(idx, 1, newItem);
      }else{
        item.fridge = false;
      }

      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReceipts.fulfilled, (state, action) => {
     
    }),
      builder.addCase(addReceipt.fulfilled, (state, action) => {
        state.products.push(action.payload);
      }),
      builder.addCase(fetchExpProducts.fulfilled, (state, action) => {
        const item = state.products.find((p) => p.name === action.payload.food);

        const itemCopy = {...item}
        itemCopy.fridgeExp = action.payload.fridge;
        itemCopy.freezerExp = action.payload.freezer;
        state.exp.push(itemCopy);
      })
  }
});

export const selectReceipt = (state) => {
  return state.receipt.products;
};

export const selectExp = (state) => {
  console.log('EXP ARR:', state.receipt.exp);
  return state.receipt.exp;
};

export const { add2Receipt, deleteItem } = receiptSlice.actions;

export default receiptSlice.reducer;



/**
 * when we click the products button it would return product object and render the name also update property default to fridge
 * turnary operation to check if property would change to freezer
 * after clicking the calc exp button it would update the exp properties to calculate base on the turnary and switch to the exp page and render based on the condition.
 * add to receipt button would be on the exp page and create new receipt entry that would be tied to the current user and it update the current state object to the receipt db properity of user receipt
 */