import axios from "axios"
const baseURL = "http://localhost:5000/api"

const persistRoot = JSON.parse(localStorage.getItem("persist:root"))
const TOKEN = JSON.parse(persistRoot.user)?.currentUser?.accessToken || ""

export const publicRequest = axios.create({
  baseURL
})

export const userRequest = axios.create({
  baseURL,
  headers: {
    token: `e ${TOKEN}`
  }
})