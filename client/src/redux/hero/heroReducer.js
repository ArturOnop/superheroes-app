import {CLEAR_HERO, GET_HERO_FAILURE, GET_HERO_SUCCESS} from "./heroType";

const initialState = {
    loading: true,
    hero: {
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: []
    },
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HERO_SUCCESS:
            return {
                loading: false,
                hero: action.payload,
                error: ""
            }
        case GET_HERO_FAILURE:
            return {
                loading: false,
                hero: [],
                error: action.payload
            }
        case CLEAR_HERO:
            return initialState
        default:
            return state
    }
}

export default reducer;
