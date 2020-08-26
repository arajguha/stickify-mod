import { notesReducer } from './notes/notesReducer'
import { summaryReducer } from './summary/summaryReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    notes: notesReducer,
    summary: summaryReducer
})