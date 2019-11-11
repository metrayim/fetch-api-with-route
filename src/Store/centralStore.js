import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import {rootReducers} from '../Reducers/rootReducers'
 

export const centralStore =createStore(rootReducers,applyMiddleware(thunk))