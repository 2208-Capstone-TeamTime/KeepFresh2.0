import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../reducers/productSlice"
import receiptsSlice from "../reducers/receiptsSlice"

const store = configureStore({
    reducer: {
        products: productSlice,
        receipt: receiptsSlice,
    }
})

export default store