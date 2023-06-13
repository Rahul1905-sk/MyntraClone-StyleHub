import { baseUrl } from "../../Url";
import { ADD_TO_CART, GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actiontype";
import axios from "axios";

 

export const AddtoCart = (payload) => {
    return {type:ADD_TO_CART, payload}
} 


export const getCart =(dispatch) => {
    axios
    .get("https://glorious-robe-calf.cyclic.app/cart")
    .then((res)=>{
        dispatch(AddtoCart(res.data))    
    })
    .catch((err)=>console.log(err))
}
 
export const getCartProducts = (dispatch) => {
  
  dispatch({ type: GET_DATA_REQUEST });

  return axios
    .get(`${baseUrl}/cart`)
     
    .then((res) => {
      dispatch({ type: GET_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERROR });
    });
};

export const updateCartProductQty = (id, qty) => (dispatch) => {
   
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
 
  return axios.patch(
    `${baseUrl}/cart/${id}`,
    { quantity: +qty }
  );
};

export const deleteCartProduct = (id) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
  axios.delete(`${baseUrl}/cart/${id}`);
};



export const deleteAll = (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });

    axios
      .delete(`${baseUrl}/cartall`)
      // axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart/dummy`)
      .then((res) => {
        dispatch({ type: GET_DATA,payload:[]});
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
  