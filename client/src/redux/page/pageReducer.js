import {CREATE_HERO_PAGE, EDIT_PAGE, HERO_DETAILED_PAGE, HEROES_PAGE} from "./pageType";

const initialState = {
    page: HEROES_PAGE,
    id: "",
    hero: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HEROES_PAGE:
            return {
                page: HEROES_PAGE
            }
        case HERO_DETAILED_PAGE:
            return {
                page: HERO_DETAILED_PAGE,
                id: action.payload
            }
        case CREATE_HERO_PAGE:
            return {
                page: CREATE_HERO_PAGE
            }
        case EDIT_PAGE:
            return {
                page: EDIT_PAGE,
                hero: action.payloadHero
            }
        default:
            return state
    }
}

export default reducer;
