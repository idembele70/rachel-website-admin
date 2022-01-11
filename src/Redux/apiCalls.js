import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethod'
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductError,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess
} from "./productRedux"
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

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart())
  try {
    await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (error) {
    dispatch(deleteProductError)
  }
}

export const updateProduct = async (dispatch, product, id) => {
  dispatch(updateProductStart())
  try {
    const { data } = await userRequest.put(`/products/${id}`, product)
    dispatch(updateProductSuccess({product: data }))
  } catch (error) {
    dispatch(updateProductFailure())
  }
}

export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart())
  try {
    const { data } = await userRequest.post("products/new", product)
    dispatch(addProductSuccess(data))
  } catch (error) {
    dispatch(addProductFailure())

  }
}

