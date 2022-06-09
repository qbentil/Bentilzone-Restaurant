export type FoodData = {
    id: number;
    title: string;
    desc: string;
    price: string;
    imgSrc: string;
  };

  export type FoodCategory = {
    id: number;
    name: string;
    urlParam: string;
  }

  export type FoodCategories = FoodCategory[];