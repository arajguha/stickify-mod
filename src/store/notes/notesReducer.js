import { v4 as uuidv4 } from 'uuid'

const initialState = [
    {
        id: 'note1',
        content: 'this is note 1',
        completed: false,
        marked: false
    },
    {
        id: 'note2',
        content: 'this is note 2',
        completed: false,
        marked: false
    },
    {
        id: 'note3',
        content: 'this is note 3',
        completed: false,
        marked: false
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
            
        default:
            return state
    }
}
