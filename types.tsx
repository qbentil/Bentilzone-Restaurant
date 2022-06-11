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

  export type FoodCategories = FoodCategory[];