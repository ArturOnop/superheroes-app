import {combineReducers} from "redux";
import heroReducer from "./hero/heroReducer";
import heroesReducer from "./heroes/heroesReducer";
import pageReducer from "./page/pageReducer";
import paginationReducer from "./pagination/paginationReducer";
import createHeroReducer from "./createHero/createHeroReducer";
import editHeroReducer from "./editHero/editHeroReducer";

const rootReducer = combineReducers({
    hero: heroReducer,
    heroes: heroesReducer,
    page: pageReducer,
    paginationPage: paginationReducer,
    createHero: createHeroReducer,
    editHero: editHeroReducer
})

export default rootReducer;
