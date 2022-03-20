import CONSTANT from "./constant"

const ReducersActions = (dispatch) => {
    return {
        updateCart: (data) => dispatch({ type: CONSTANT.UPDATE_CART, cart: data }),
        updateCartIndex: (data) => dispatch({ type: CONSTANT.UPDATE_CART_INDEX, cart: data }),
        deleteCartItem: (data) => dispatch({ type: CONSTANT.DELETE_CART_ITEM, item: data }),
        resetCart: () => dispatch({ type: CONSTANT.RESET_CART }),
        
        updateNotificationsCounter: (count) => dispatch({ type: CONSTANT.UPDATE_NOTIFICATIONS_COUNTER, count: count }),
        resetNotificationsCounter: () => dispatch({ type: CONSTANT.RESET_NOTIFICATIONS_COUNTER }),
        
        updateProfile: (data) => dispatch({ type: CONSTANT.UPDATE_PROFILE, data }),
        resetProfile: () => dispatch({ type: CONSTANT.RESET_PROFILE }),
        
        updateLanguage: (data) => dispatch({ type: CONSTANT.ACTIVE_LANGUAGE, language: data }),
    }
}

export default ReducersActions