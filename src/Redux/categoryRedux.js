import { createSlice } from '@reduxjs/toolkit'
const category = createSlice({
  name: "category",
  initialState: {
    isFetching: false,
    categories: [],
    error: false
  },
  reducers: {
    //ADD a new cart
    addCategoryStart: (state) =>
      Object.assign(state, { isFetching: true, error: false }),
    addCategorySuccess: (state, { payload }) =>
      Object.assign(state, {
        isFetching: false,
        categories: [...state.categories, payload]
      }),
    addCategoryFailure: (state) =>
      Object.assign(state,
        {
          isFetching: false,
          error: true
        }),
    //UPDATE one category endpoint
    updateCategoryStart: (state) =>
      Object.assign(state, { isFetching: true })
    ,
    updateCategorySuccess: (state, { payload }) => {
      state.isFetching = false
      state.categories[state.categories.findIndex(category => category._id === payload._id)] = payload
      state.error = false
    },
    updateCategoryFailure: (state) =>
      Object.assign(state,
        {
          isFetching: false,
          error: true
        }),
    // DELETE one category endpoint
    deleteCategoryStart: (state) =>
      Object.assign(state, { isFetching: true })
    ,
    deleteCategorySuccess: (state, { payload }) => Object.assign(
      state, {
      isFetching: false,
      categories: state.categories.filter(category => category._id !== payload)
    }
    ),
    deleteCategoryFailure: (state) =>
      Object.assign(state,
        {
          isFetching: false,
          error: true
        })
  }
})

export default category.reducer
export const {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
} = category.actions