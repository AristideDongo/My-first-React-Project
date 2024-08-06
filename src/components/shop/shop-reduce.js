 const initialState = {
  showDetail: false,
  detail: [],
};

 const shopReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        ...state,
        showDetail: true,
        detail: action.payload,
      };
    case "CLOSE_DETAIL":
      return {
        ...state,
        showDetail: false,
      };
    default:
      return state;
  }
};

export {initialState, shopReducer}