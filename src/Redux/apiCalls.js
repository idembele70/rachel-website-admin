import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { publicRequest } from '../requestMethod'
export const login = async (dispatch, user) => {
 dispatch(loginStart())
 try {
   const {data} = await publicRequest.post("auth/login",user)
   dispatch(loginSuccess(data))
 } catch (error) {
   dispatch(loginFailure())
 }
}
