
export const incrementTotalNotes = () => {
    return {
        type: 'INCREMENT_TOTAL_NOTES'
    }
}

export const decrementTotalNotes = () => {
    return {
        type: 'DECREMENT_TOTAL_NOTES'
    }
}

export const increasePinCount = () => {
    return {
        type: 'INCREMENT_PIN_COUNT'
    }
}

export const decreasePinCount = () => {
    return {
        type: 'DECREMENT_PIN_COUNT'
    }
}