export const actionTypes = {
    SET_USER: 'SET_USER',
    // SET_ORDERS: 'SET_ORDERS',
    // SET_PRODUCTS: 'SET_PRODUCTS',
    // SET_CART: 'SET_CART',
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            default:
                return state;
    }
}

export default reducer;