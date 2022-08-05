import {POST_HERO_FAILURE, CLEAR_MESSAGE} from "./createHeroType";

const initialState = {
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_HERO_FAILURE:
            return {
                error: action.payload
            }
        case CLEAR_MESSAGE:
            return initialState
        default:
            return state
    }
}

export default reducer;
