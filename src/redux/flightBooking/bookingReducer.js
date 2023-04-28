import { BOOKFLIGHT, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKFLIGHT:
            return [
                ...state, action.payload
            ]
        case DELETE:
            return state.filter((info, index) => index !== action.payload)

        default:
            return state
    }
}
export default bookingReducer;