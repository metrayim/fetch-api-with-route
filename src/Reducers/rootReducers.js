import {combineReducers} from 'redux'
import {articleReducer} from './articleReducer'
import {addReducer} from './addReducer'

export const rootReducers=combineReducers({
    articleReducer:articleReducer,
    addReducer:addReducer
})