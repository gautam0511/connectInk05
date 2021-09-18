import { ActionType } from "../user/userType"

export const initialState = {
    user:null
}

export const userReducer = (state=initialState,action)=>{
 switch(action.type){
     case ActionType.SET_USER:
         return {...state,user:action.payload}
         default:
         return state
 }
}