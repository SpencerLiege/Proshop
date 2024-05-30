import { createSlice} from '@reduxjs/toolkit'
import { updateCart } from '../../utils/cartUtils'

const initialState = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : {cartItems: []}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const item = action.payload
            const itemExist = state.cartItems.find((i)=> i._id === item._id )

            if(itemExist){
                state.cartItems = state.cartItems.map((x)=> x._id === itemExist._id ? item: x  )
            }
            else{
                state.cartItems = [...state.cartItems, item]
            }
            return updateCart(state, item)
        },
        removeFromCart: (state, action)=>{
            const item = action.payload
            state.cartItems = state.cartItems.filter((x)=> x._id !== item )
        }
    }
})


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer