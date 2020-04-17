import { ADD_PRODUCT, UPDATE_CART } from './../../constants/actionType.constant'

export const addToCart = (item) => ({ 
    type: ADD_PRODUCT,
    item
})

export const updateCart = (items) => ({
    type: UPDATE_CART,
    items
})