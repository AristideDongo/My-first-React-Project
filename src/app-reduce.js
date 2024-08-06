import Homeproducts from "./components/home_products/home_products";

export const initialState = {
  like: [],
  cart: [],
  shop: Homeproducts,
  search: "",
};

export const Appreducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKE":
      return { ...state, like: action.payload };
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_SHOP":
      return { ...state, shop: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "ADD_TO_CART":
      const exist = state.cart.find((x) => x.id === action.payload.id);
      if (exist) {
        alert("❌Vous avez déjà ajouter ce produit au panier!");
        return state;
      } else {
        alert("Ajouter au panier✅");
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "ADD_LIKE":
      const existy = state.like.find((i) => i.id === action.payload.id);
      if (existy) {
        alert("❌Vous avez déjà ajouter ce produit à votre collection!");
        return state;
      } else {
        alert("Ajouter à votre collection✅");
        return {
          ...state,
          like: [...state.like, { ...action.payload, quantity: 1 }],
        };
      }
    case "FILTER":
      const cateFilter = action.payload.products.filter(
        (product) => product.cat === action.payload.category
      );
      return { ...state, shop: cateFilter };
    case "ALL_CATE_FILTER":
      return { ...state, shop: action.payload };
    case "SEARCH_PRODUCT":
      const searchfilter = action.payload.products.filter(
        (x) => x.cat === state.search
      );
      return { ...state, shop: searchfilter };
    default:
      return state;
  }
};
