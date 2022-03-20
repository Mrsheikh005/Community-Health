import CONSTANT from './constant';
import { addToCart, deleteCartItem } from './cartHandler';
const initialCartState = {
	cart: { products: [], productsTotal: 0, mealTime: 'dinner' }
};
const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case CONSTANT.UPDATE_CART:
			return { cart: addToCart(state, action.cart) };
		case CONSTANT.UPDATE_CART_INDEX:
			return { cart: action.cart };
		case CONSTANT.RESET_CART:
			return { cart: initialCartState };
		case CONSTANT.DELETE_CART_ITEM:
			return { cart: deleteCartItem(state, action.item) };
	}
	return state;
};

export { cartReducer };
