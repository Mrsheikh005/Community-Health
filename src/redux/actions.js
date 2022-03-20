import CONSTANT from './constant';

const ReducersActions = (dispatch) => {
	return {
		updateCart: (data) => dispatch({ type: CONSTANT.UPDATE_CART, cart: data }),
		updateCartIndex: (data) => dispatch({ type: CONSTANT.UPDATE_CART_INDEX, cart: data }),
		deleteCartItem: (data) => dispatch({ type: CONSTANT.DELETE_CART_ITEM, item: data }),
		resetCart: () => dispatch({ type: CONSTANT.RESET_CART })
	};
};

export default ReducersActions;
