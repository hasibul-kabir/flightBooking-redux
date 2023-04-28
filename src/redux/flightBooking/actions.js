import { BOOKFLIGHT, DELETE } from "./actionTypes"

export const bookFlight = (value) => {
    return {
        type: BOOKFLIGHT,
        payload: value
    }
}

export const deleteBooking = (value) => {
    return {
        type: DELETE,
        payload: value
    }
}