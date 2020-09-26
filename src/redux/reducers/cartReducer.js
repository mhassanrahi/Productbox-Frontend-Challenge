import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "../types/cartTypes";
import { addItemToCart } from "../utils/cartUtils";
const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer