import {GET_PAGINATION_PAGE} from "./paginationType";

const initialState = 1;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAGINATION_PAGE:
            return action.payload
        default:
            return state
    }
}

export default reducer;
