import { ActionType } from "./userType";

export const setUser = (user)=>{
    return{
        type:ActionType.SET_USER,
        payload:user
    }
}