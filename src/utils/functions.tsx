import { cartItem, FoodItem } from "../../types";
import { firebaseFetchAllCartItems, firebaseFetchFoodItems, firebaseUpdateCartItem } from "../Firebase";

export const dispatchtUserCartItems = (
  uid: string,
  items: cartItem[],
  dispatch: any
) => {
  const cartItems = items.filter((item: cartItem) => item.uid === uid);
  dispatch({
    type: "SET_CARTITEMS",
    cartItems: cartItems,
  });

  return cartItems;
};

export const fetchUserCartData = async (user: any, dispatch: any) => {
  if (user) {
    await firebaseFetchAllCartItems().then((data) => {
      const userCart = dispatchtUserCartItems(user.uid, data, dispatch);
      localStorage.setItem("cartItems", JSON.stringify(userCart));
    });
  } else {
    localStorage.setItem("cartItems", "undefined");
  }
};

export const fetchFoodData = async (dispatch: any) => {
  await firebaseFetchFoodItems().then((data) => {
    dispatch({
      type: "SET_FOOD_ITEMS",
      foodItems: data,
    });
  });
};


export const getFoodyById = (menu:FoodItem[], fid: number) => {
    return menu.find((item: FoodItem) => item.id === fid);
}

export const updateCartItemState  = async (cartItems: cartItem[], item: cartItem, dispatch:any) => {
    const index = cartItems.findIndex((cartItem: cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        cartItems[index] = item;
    }
    dispatch({
        type: "SET_CARTITEMS",
        cartItems: cartItems,
    })
    await firebaseUpdateCartItem(item);
}

export const updateCartItemQty = async (cartItems: cartItem[], item: cartItem, dispatch:any, val:number) => {
    const index = cartItems.findIndex((cartItem: cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        cartItems[index].qty += val;
    }
    dispatch({
        type: "SET_CARTITEMS",
        cartItems: cartItems,
    })
    await firebaseUpdateCartItem(cartItems[index]);
}
