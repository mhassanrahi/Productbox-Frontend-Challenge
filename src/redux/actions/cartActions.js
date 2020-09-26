  import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from '../types/cartTypes';

  export const addItem = item => ({
      type: ADD_ITEM,
      payload: item
  })