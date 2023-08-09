import { type } from "@testing-library/user-event/dist/type"

export const itemIncriment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: amount
        })
    }
}

export const itemDecriment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: amount
        })
    }
}