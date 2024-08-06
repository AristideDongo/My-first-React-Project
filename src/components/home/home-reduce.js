const initialState = {
  newProduct: [],
  featuredProduct: [],
  topProduct: [],
  trendingProduct: [],
  showDetail: false,
  detail: null
};

const Homereducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEW_PRODUCT':
      return { ...state, newProduct: action.payload };
    case 'SET_FEATURED_PRODUCT':
      return { ...state, featuredProduct: action.payload };
    case 'SET_TOP_PRODUCT':
      return { ...state, topProduct: action.payload };
    case 'SET_TRENDING_PRODUCT':
      return { ...state, trendingProduct: action.payload };
    case 'SHOW_DETAIL':
      return { ...state, showDetail: true, detail: action.payload };
    case 'CLOSE_DETAIL':
      return { ...state, showDetail: false, detail: null };
    case 'FILTER_TRENDING':
      return { ...state, trendingProduct: action.payload };
    default:
      return state;
  }
};

export { initialState, Homereducer };
