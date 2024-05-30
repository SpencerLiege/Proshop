export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) =>{
    // item price
    const itemPrice = state.cartItems.reduce(
        (acc, item) => acc + (item.price * 100 * item.qty) /100, 0
    )
    state.itemPrice = addDecimals(itemPrice)

    // shipping price
    const shippingPrice = itemPrice > 100 ? 0 : 10
    state.shippingPrice = addDecimals(shippingPrice)

    // tax price
    const taxPrice = 0.15 * itemPrice
    state.taxPrice = addDecimals(taxPrice)

    // total price 
    const totalPrice = itemPrice + shippingPrice + taxPrice
    state.totalPrice = addDecimals(totalPrice)

    // save the cart to localstorage 
    localStorage.setItem('cart', JSON.stringify(state))

    return state

}