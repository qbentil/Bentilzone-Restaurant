export type foodItemStatic = {
  id: number;
  title: string;
  desc: string;
  price: string;
  imgSrc: string;
}
export type foodItemsStatic = {
  items: foodItemStatic[];
}
export type FoodItem = {
    id: number;
    title: string;
    description?: string;
    price: string;
    imageURL: string;
    calories: string;
    qty: string;
    category: string;
};

export type FoodItems = {
  items: FoodItem[];
}

export type FoodCategory = {
  id: number;
  name: string;
  urlParam: string;
  icon?: JSX.Element
}

export type cartItem = {
  id: number;
  fid: number;
  uid: string;
  qty: number;
}

export type cartItems = {
  items: cartItem[]
}

export type User = {
  uid: string;
  email?: string;
  displayName?:string;
  phoneNumber?: string;
  providerId: string;
  photoURL?: string;

}
export type FoodCategories = FoodCategory[];