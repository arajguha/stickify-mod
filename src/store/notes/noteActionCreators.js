
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