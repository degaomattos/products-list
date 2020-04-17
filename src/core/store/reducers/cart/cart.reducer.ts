import { ADD_PRODUCT, UPDATE_CART } from "../../../constants/actionType.constant"

const initialState = {
    items: []
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                items: [
                    ...state.items,
                    action.item
                ]
            }
        case UPDATE_CART:
            return {
                items: action.items
            }
        default:
            return state
    }
}
  