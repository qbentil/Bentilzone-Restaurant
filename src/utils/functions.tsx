import { MdShoppingBasket } from "react-icons/md";
import { toast } from "react-toastify";
import { cartItem, FoodItem } from "../../types";
import {
  firebaseAddToCart,
  firebaseDeleteCartItem,
  firebaseFetchAllCartItems,
  firebaseFetchFoodItems,
  firebaseUpdateCartItem,
  firebaseEmptyUserCart,
  firebaseLogout,
  firebaseFetchAllUsers,
} from "../Firebase";

export const addToCart = async (cartItems:cartItem[], foodItems:FoodItem[], user:any, fid: number, dispatch:any) => {
  if(!user)
  {
    toast.error("Please login to add items to cart", {icon: <MdShoppingBasket className = "text-2xl text-cartNumBg" />, toastId: "unauthorizedAddToCart"});
  }else{
    if(cartItems.some( (item:cartItem) => item['fid'] === fid )){
      toast.error("Item already in cart", {icon: <MdShoppingBasket className = "text-2xl text-cartNumBg" />, toastId: "itemAlreadyInCart"});
    }else{
      const data:cartItem = {
        id: Date.now(),
        fid: fid,
        uid: user.uid,
        qty: 1
      }
      dispatch({
        type: "SET_CARTITEMS",
        cartItems: [...cartItems, data],
      });
      calculateCartTotal(cartItems, foodItems, dispatch);
      await firebaseAddToCart(data);
    }
  }
};
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
    await firebaseFetchAllCartItems()
      .then((data) => {
        const userCart = dispatchtUserCartItems(user.uid, data, dispatch);
        localStorage.setItem("cartItems", JSON.stringify(userCart));
      })
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  } else {
    localStorage.setItem("cartItems", "undefined");
  }
};

export const fetchFoodData = async (dispatch: any) => {
  await firebaseFetchFoodItems()
    .then((data) => {
      dispatch({
        type: "SET_FOOD_ITEMS",
        foodItems: data,
      });
    })
    .then(() => {})
    .catch((e) => {
      console.log(e);
    });
};

export const getFoodyById = (menu: FoodItem[], fid: number) => {
  return menu.find((item: FoodItem) => item.id === fid);
};

//  Update cart item State
export const updateCartItemState = async (
  cartItems: cartItem[],
  item: cartItem,
  dispatch: any
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems[index] = item;
  }
  dispatch({
    type: "SET_CARTITEMS",
    cartItems: cartItems,
  });
  await firebaseUpdateCartItem(item)
    .then(() => {})
    .catch((e) => {
      console.log(e);
    });
};

// Update Cart Item Quantity
export const updateCartItemQty = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any,
  val: number
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems[index].qty += val;
    dispatch({
      type: "SET_CARTITEMS",
      cartItems: cartItems,
    });
    calculateCartTotal(cartItems, foodItems, dispatch);
    await firebaseUpdateCartItem(cartItems[index])
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  }
};

//  Delete Cart Item
export const deleteCartItem = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems.splice(index, 1);
    dispatch({
      type: "SET_CARTITEMS",
      cartItems: cartItems,
    });
    calculateCartTotal(cartItems, foodItems, dispatch);
    await firebaseDeleteCartItem(item)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  }
};

// Calculate Total Price Round to 2 decimal places
export const calculateCartTotal = (cartItems: cartItem[], foodItems: FoodItem[], dispatch:any) => {
  let total = 0;
  cartItems.forEach((item: cartItem) => {
    const foodItem = getFoodyById(foodItems, item.fid);
    total += item.qty * parseFloat(foodItem?.price || "0");
  });
  dispatch({
    type: "SET_CART_TOTAL",
    cartTotal: total.toFixed(2),
  });
}


// Empty Cart 
export const emptyCart = async (cartItems:cartItem[],foodItems: FoodItem[], dispatch:any) => {
    if(cartItems.length > 0)
    {
      dispatch({
        type: "SET_CARTITEMS",
        cartItems: [],
      });
      calculateCartTotal(cartItems, foodItems, dispatch);
      await firebaseEmptyUserCart(cartItems).then(() => {}).catch((e) => {
        console.log(e);
      })
    }else{
      toast.warn("Cart is already empty")
    }  
}

// Hide Cart
export const hideCart = (dispatch:any) => {
    dispatch({
      type: "TOGGLE_CART",
      showCart: !true,
    });
}

export const shuffleItems = (items: any) => {
  let currentIndex = items.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [items[currentIndex], items[randomIndex]] = [
      items[randomIndex],
      items[currentIndex],
    ];
  }

  return items;
};

export const logout = async (user:any, dispatch:any, navigate:any) => {
  if (user) {
    await firebaseLogout().then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
      dispatch({
        type: "SET_CARTITEMS",
        cartItems: [],
      });
      // turn off adminMode
      dispatch({
        type: "SET_ADMIN_MODE",
        adminMode: false,
      });
      
      localStorage.setItem("user", "undefined");
      localStorage.setItem("adminMode", "undefined");
      localStorage.removeItem("cartItems");
      navigate("/");
    }
    ).catch((e:any) => {
      console.log(e);
    });

  } else {
    console.log("You are not logged in");
  }
};

export const ToggleAdminMode = (dispatch:any, state:boolean) => {
  dispatch({
    type: "SET_ADMIN_MODE",
    adminMode: state,
  });
  localStorage.setItem("adminMode", JSON.stringify(state));
  console.log(state);
}

// export const getAllUser = async () => {
//   return await firebaseFetchAllUsers().then((data:any) => {
//     return data;
//   }).catch((e:any) => {
//     console.log(e);
//   })
// }