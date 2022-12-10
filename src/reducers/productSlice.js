import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("fetchProducts", async() => {
    try {
        const { data } = await axios.get("/api/products/all")
        return data
    } catch(error) {
        console.log("Couldn't fetch products!", error)
    }
})

const initialState = { 
    products: [] }

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return { products: action.payload }
        })
    }
})

export const selectProducts = (state) => {
    return state.products.products;
}

export default productSlice.reducer;