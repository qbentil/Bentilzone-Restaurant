import { fetchSessionUser } from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();

export const initialState = {
    user: sessionUser,
    foodItems: null,
    showCart: false,
    cartItems: [],
    cartTotal: 0,
}