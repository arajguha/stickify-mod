const initialState = {
    totalNotes: 3
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

        default: 
            return state
    }
}