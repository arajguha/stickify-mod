const initialState = {
    totalNotes: 3,
    pinned: 1
}

export const summaryReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_TOTAL_NOTES':
            return {
                ...state,
                totalNotes: state.totalNotes + 1
            }

        case 'DECREMENT_TOTAL_NOTES':
            return {
                ...state,
                totalNotes: state.totalNotes - 1
            }
        case 'INCREMENT_PIN_COUNT':
            return {
                ...state, 
                pinned: state.pinned + 1
            }
        case 'DECREMENT_PIN_COUNT':
            return {
                ...state, 
                pinned: state.pinned - 1
            }
        default: 
            return state
    }
}