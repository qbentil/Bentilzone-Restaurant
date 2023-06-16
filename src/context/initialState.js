import { fetchSessionUser, fetchSessionUserMode } from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();
export const initialState = {
    user: sessionUser,
    foodItems: null,
    showCart: false,
    showContactForm: false,
    cartItems: [],
    cartTotal: 0,
    adminMode: sessionUserMode,
    users: [],
    orders: [],
    paymentMethod: 'mobile_money',
    checkoutData: {},
}