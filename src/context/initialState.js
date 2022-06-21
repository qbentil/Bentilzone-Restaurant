import { fetchSessionUser, fetchSessionUserMode } from "../utils/fetchSessionData";
import { getAllUser } from "../utils/functions";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();
const users = getAllUser()
export const initialState = {
    user: sessionUser,
    foodItems: null,
    showCart: false,
    cartItems: [],
    cartTotal: 0,
    adminMode: sessionUserMode,
    users: users,
}