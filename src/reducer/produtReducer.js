const initialState ={
     productsData: [],
     meta: {},
     loading: false,
     cartData: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
   case 'FETCH_PRODUCT':
    return {
      ...state,
     productsData: action.meta.page === 1 ? action.payload: [...state.productsData,...action.payload],
     meta: action.meta,
     loading: false,
    }

  case 'API_LOADING':
    return {
      ...state,
     loading: true,
     meta:{...state.meta,page: action.page}
    }

  case 'ADD_CART':
    const productId = action.productId;
    const filteredItem = state.productsData.find(item => item.id === productId);
    const cartData = state.cartData;
    const isitemAvailable = cartData.find(item => item.id === productId);
    if(filteredItem && !isitemAvailable){
      cartData.push(filteredItem);
    }
    return {
      ...state,
      cartData,
    }

   default:
    return state
  }
 }
