const initialState = {
    products: [],
    carts: []
}
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_DATA':
            return {
                ...state,
                products: action.payload
            }
        case 'CART_DATA':
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
  }