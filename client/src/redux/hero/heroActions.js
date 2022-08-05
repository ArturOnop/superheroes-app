import {CLEAR_HERO, GET_HERO_FAILURE, GET_HERO_SUCCESS} from "./heroType";
import axios from "axios";

export const getHeroSuccess = hero => {
    return {
        type: GET_HERO_SUCCESS,
        payload: hero
    }
}

export const getHeroFailure = error => {
    return {
        type: GET_HERO_FAILURE,
        payload: error
    }
}

export const clearHero = () => {
    return {
        type: CLEAR_HERO
    }
}

export const getHero = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:7777/hero/${id}`, {
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            dispatch(getHeroSuccess(res.data));
        }).catch(error => {
            dispatch(getHeroFailure(error.message));
        });
    }
}
