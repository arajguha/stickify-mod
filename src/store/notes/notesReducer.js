import { v4 as uuidv4 } from 'uuid'

const initialState = [
    {
        id: 'note1',
        content: 'this is note 1',
        completed: false,
        pinned: true
    },
    {
        id: 'note2',
        content: 'this is note 2',
        completed: false,
        pinned: false
    },
    {
        id: 'note3',
        content: 'this is note 3',
        completed: false,
        pinned: false
    }
]

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: uuidv4(),
                    content: action.payload,
                    completed: false, 
                    marked: false
                }
            ]
        
        case 'DELETE_NOTE':
            const updatedState = state.filter(note => note.id !== action.id)
            return updatedState
        
        case 'UPDATE_NOTE':
            return state.map(note => {
                if(note.id === action.payload.id)
                    return {
                        ...note,
                        content: action.payload.newText
                    }
                else return note
            })
        case 'PIN_NOTE':
            return state.map(note => {
                if(note.id === action.id){
                    const togglePin = !note.pinned
                    return {
                        ...note,
                        pinned: togglePin
                    }
                }
                else return note
            })
            
        default:
            return state
    }
}
