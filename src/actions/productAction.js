import axios from "axios"

export const fetchProducts = (filterParam = '', page=1 , limit=20) => {
  const filterQuery = filterParam? `&_sort=${filterParam}`:''
  const APIURL = `http://localhost:3000/api/products?_page=${page}&_limit=${limit}${filterQuery}`;
  return async function (dispatch) {
    dispatch({type: 'API_LOADING', page: page});
    try {
      const response = await axios.get(APIURL)
      dispatch({
        type: 'FETCH_PRODUCT',
        payload: response.data,
        meta: {
          filter: filterParam || '',
          page: page
        }
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const addToCart = id => {
  return async function (dispatch) {
    dispatch({
      type: 'ADD_CART',
      productId: id,
    })
  }
}