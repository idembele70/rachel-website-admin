import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET ALL
    getProductStart: (state) =>
      Object.assign(state, {
        isFetching: true,
        error: false
      }),
    getProductSuccess: (state, action) =>
      Object.assign(state, {
        products: action.payload,
        isFetching: false
      }),
    getProductFailure: (state) =>
      Object.assign(state, {
        error: true,
        isFetching: false
      }),
    // DELETE ONE BY ID
    deleteProductStart: (state) =>
      Object.assign(state, {
        isFetching: true,
        error: false,
      }),
    deleteProductSuccess: (state, { payload }) =>
      Object.assign(state, {
        isFetching: false,
        products: state.products.filter(
          item => item._id !== payload
        )
      }),
    deleteProductError: (state) =>
      Object.assign(state, {
        isFetching: false,
        error: true
      })
  }
})

export const
  { getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductError } = productSlice.actions
export default productSlice.reducer