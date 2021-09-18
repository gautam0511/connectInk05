import { RecieverType } from "./recieverType";

export const setReciever = (reciever)=>{
    return{
        type:RecieverType.SET_RECIEVER,
        payload:reciever
    }
    
}