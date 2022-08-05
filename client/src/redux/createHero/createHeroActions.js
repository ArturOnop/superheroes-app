import axios from "axios";
import {POST_HERO_FAILURE, CLEAR_MESSAGE} from "./createHeroType";

export const postHeroFailure = error => {
    return {
        type: POST_HERO_FAILURE,
        payload: error
    }
}

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE
    }
}

export const postHero = hero => {
    return (dispatch) => {
        axios.post(`http://localhost:7777/hero`, hero, {
            headers: {"Content-Type": "application/json"}
        }).catch(error => {
            dispatch(postHeroFailure(error.message));
        });
    }
}
