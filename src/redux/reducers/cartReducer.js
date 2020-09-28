import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "../types/cartTypes";
import { addItemToCart, removeItemFromCart } from "../utils/cartUtils";
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
        
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
            }    
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer