import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethod'
import { deleteProductError, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess } from "./productRedux"
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const { data } = await publicRequest.post("auth/login", user)
    dispatch(loginSuccess(data))
  } catch (error) {
    dispatch(loginFailure())
  }
}


export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const { data } = await publicRequest.get("/products/")
    dispatch(getProductSuccess(data))
  } catch (error) {
    dispatch(getProductFailure)
  }
}

export const deleteProduct = (dispatch, id) => {
  dispatch(deleteProductStart())
  try {
    /* const {data} = userRequest.delete(`/products/${id}`) */
    dispatch(deleteProductSuccess(id))
  } catch (error) {
    dispatch(deleteProductError)
  }
}

