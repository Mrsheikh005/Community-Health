import CONSTANT from "./constant"
import Defaultlanguage from "../assets/languages/English.json"
import { addToCart, deleteCartItem } from "../utils/cartHandler"
const initialCartState = {
    cart: { products: [], productsTotal: 0, mealTime: "dinner" }
}
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case CONSTANT.UPDATE_CART:
            return { cart: addToCart(state, action.cart) }
        case CONSTANT.UPDATE_CART_INDEX:
            return { cart: action.cart }
        case CONSTANT.RESET_CART:
            return { cart: initialCartState }
        case CONSTANT.DELETE_CART_ITEM:
            return { cart: deleteCartItem(state, action.item) }
    }
    return state
}

const initialCurrencyState = {
    currency: "$"
}
const currencyReducer = (state = initialCurrencyState, action) => {
    switch (action.type) {
        case CONSTANT.UPDATE_CURRENCY:
            return { currency: action.currency }
    }
    return state
}

const initialLangState = {
    language: Defaultlanguage
}
const languageReducer = (state = initialLangState, action) => {
    switch (action.type) {
        case CONSTANT.ACTIVE_LANGUAGE:
            return { language: action.language }
    }
    return state
}

const initialNotificationState = {
    count: 0
}
const notificationsReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case CONSTANT.UPDATE_NOTIFICATIONS_COUNTER:
            return { count: action.count }
        case CONSTANT.RESET_NOTIFICATIONS_COUNTER:
            return { count: 0 }
    }
    return state
}

const initialProfile = { profile: {} }
const profileReducer = (state = initialProfile, action) => {
    switch (action.type) {
        case CONSTANT.UPDATE_PROFILE:
            return { profile: action.data }
        case CONSTANT.RESET_CART:
            return initialProfile

    }
    return state
}


export { cartReducer, languageReducer, notificationsReducer, currencyReducer, profileReducer }