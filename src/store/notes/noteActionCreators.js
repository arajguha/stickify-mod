
export const addNoteAction = (note) => {
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}

export const deleteNoteAction = (id) => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}

export const updateNoteAction = (id, newText) => {
    return {
        type: 'UPDATE_NOTE',
        payload: {id, newText}
    }
}

export const pinNote = (id) => {
    return {
        type: 'PIN_NOTE',
        id
    }
}