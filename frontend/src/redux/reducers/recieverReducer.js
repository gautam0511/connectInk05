import {RecieverType} from '../reciever/recieverType'
const initialState = {
    reciever:null
}

export const recieverReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case RecieverType.SET_RECIEVER:
            return {...state,reciever:action.payload}
          default:
              return state  
    }

}