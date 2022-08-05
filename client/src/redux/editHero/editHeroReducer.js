import {PATCH_HERO_FAILURE, PATCH_CLEAR_MESSAGE} from "./editHeroType";

const initialState = {
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PATCH_HERO_FAILURE:
            return {
                error: action.payload
            }
        case PATCH_CLEAR_MESSAGE:
            return initialState
        default:
            return state
    }
}

export default reducer;
