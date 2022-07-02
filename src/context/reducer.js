export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART',
    SET_CARTITEMS: 'SET_CARTITEMS',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    SET_ADMIN_MODE: 'SET_ADMIN_MODE',
    SET_USERS: 'SET_USERS',
    UPDATE_USER: 'UPDATE_USER',
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            };
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                showCart: action.showCart,
            };
        case actionTypes.SET_CARTITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case actionTypes.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.cartTotal,
            };
        case actionTypes.SET_ADMIN_MODE:
            return {
                ...state,
                adminMode: action.adminMode,
            };
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.user
            }
            default:
                return state;
    }
}

export default reducer;