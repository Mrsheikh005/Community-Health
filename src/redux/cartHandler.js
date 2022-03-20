const addToCart = (state, product) => {
    const products = state.cart.products
    const itemIndex = isProductExist(products, product)
    if (itemIndex === -1) {
        const updatedCart = [product, ...state.cart.products];
        const productsTotal = updatedCart.reduce((a, b) => a + ((b.price) * b.quantity), 0)
        return { ...state.cart, products: updatedCart, productsTotal: productsTotal }
    } else {
        products[itemIndex] = product
        const productsTotal = products.reduce((a, b) => a + ((b.price) * b.quantity), 0)
        return { ...state.cart, products: [...products], productsTotal }
    }
}
const deleteCartItem = (state, product) => {
    const products = state.cart.products
    const itemIndex = isProductExist(products, product)
    if (itemIndex !== -1) {
        products.splice(itemIndex, 1)
        const productsTotal = products.reduce((a, b) => a + ((b.price) * b.quantity), 0)
        return { ...state.cart, products: [...products], productsTotal }
    }
}
const isProductExist = (products, product) => {
    const itemIndex = products && products.length ? products.findIndex(x => x.id === product.id && x.outletId === product.outletId) : -1
    return itemIndex
}

export { addToCart, isProductExist, deleteCartItem }