import {combineReducers} from 'redux'
import { recieverReducer } from './recieverReducer'
import { userReducer } from './userReducer'

export const reducers = combineReducers({
    user:userReducer,
    reciever:recieverReducer
})