import { product } from './../../../../mock/product.mock'
const initialState = {
    items: product
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        default:
            return state
    }
}
  