import {GET_HEROES_CLEAR, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from "./heroesType";

const initialState = {
    loading: true,
    heroes: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HEROES_SUCCESS:
            return {
                loading: false,
                heroes: action.payload,
                error: ""
            }
        case GET_HEROES_FAILURE:
            return {
                loading: false,
                heroes: [],
                error: action.payload
            }
        case GET_HEROES_CLEAR:
            return initialState
        default:
            return state
    }
}

export default reducer;
