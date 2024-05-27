import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './src/slices/apiSLice.js'
import  cartSliceReducer  from './src/slices/cartSlice.js'


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store