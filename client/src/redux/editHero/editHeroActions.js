import axios from "axios";
import {PATCH_CLEAR_MESSAGE, PATCH_HERO_FAILURE} from "./editHeroType";

export const patchHeroFailure = error => {
    return {
        type: PATCH_HERO_FAILURE,
        payload: error
    }
}

export const patchClearMessage = () => {
    return {
        type: PATCH_CLEAR_MESSAGE
    }
}

export const patchHero = (id, hero) => {
    return (dispatch) => {
        axios.patch(`http://localhost:7777/hero/${id}`, hero, {
            headers: {"Content-Type": "application/json"}
        }).catch(error => {
            dispatch(patchHeroFailure(error.message));
        });
    }
}
