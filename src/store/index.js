import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../reducers/productSlice"
import receiptsSlice from "../reducers/receiptsSlice"
import userSlice from "../reducers/userSlice"

const store = configureStore({
    reducer: {
        products: productSlice,
        receipt: receiptsSlice,
        user: userSlice,
    }
})

export default store