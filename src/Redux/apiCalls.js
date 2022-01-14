import { loginStart, loginSuccess, loginFailure } from "./userRedux"
import {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
} from "./categoryRedux"
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
  updateProductSuccess,
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
    dispatch(updateProductSuccess({ product: data }))
  } catch (error) {
    dispatch(updateProductFailure())
  }
}

export const addProduct = async (dispatch, id) => {
  dispatch(addProductStart())
  try {
    const { data } = await userRequest.post(`products/new/`)
    dispatch(addProductSuccess(data))
  } catch (error) {
    dispatch(addProductFailure())
  }
}

//  ADD category
export const addCategory = async (dispatch, category) => {
  dispatch(addCategoryStart())
  try {
    const { data } = await userRequest.post("/category/new", category)
    console.log(data)
    dispatch(addCategorySuccess(data))
  } catch (error) {
    console.log(error)
    dispatch(addCategoryFailure())
  }
}
// UPDATE Product endpoint
export const updateCategory = async (dispatch, newInformation, id) => {
  dispatch(updateCategoryStart())
  try {
    const { data } = await userRequest.put(`category/new/:${id}`, newInformation)
    dispatch(updateCategorySuccess(data))
  } catch (error) {
    dispatch(updateCategoryFailure())
  }
}

// DELETE product endpoint
export const deleteCategory = async (dispatch, id) => {
  dispatch(deleteCategoryStart())
  try {
    await userRequest.delete(`category/new/${id}`)
    dispatch(deleteCategorySuccess(id))
  } catch (error) {
    dispatch(deleteCategoryFailure())
  }
}