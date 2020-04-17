
import { combineReducers } from 'redux'
import products from './products/products.reducer'
import cart from './cart/cart.reducer'

export const Reducers = combineReducers({
    products,
    cart
});