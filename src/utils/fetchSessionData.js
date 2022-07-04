import { firebaseGetAllUsers } from "../Firebase";

export const fetchSessionUser = () => {
  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

    return user;
  // return null
};
export const fetchSessionCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

    return cartInfo ? cartInfo : [];
};

// session usermode
export const fetchSessionUserMode = () => {
  const adminMode =
    localStorage.getItem("userMode") !== "undefined"
      ? JSON.parse(localStorage.getItem("adminMode"))
      : localStorage.clear();

    return adminMode ? adminMode : false;
}
